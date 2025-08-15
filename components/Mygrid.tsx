"use client"

import React from "react"
import _ from "lodash"
import Link from "next/link"
import { Responsive, WidthProvider, type Layout, type Layouts } from "react-grid-layout"
import { ThemeToggle } from "@/components/theme-toggle"

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { fixedLayout } from "@/app/gridlayout"
import { cn } from "@/lib/utils"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

interface ResponsiveGridLayoutProps {
  className?: string
  rowHeight?: number
  onLayoutChange?: (layout: Layout[], layouts: Layouts) => void
  cols?: Record<string, number>
}

interface ResponsiveGridLayoutState {
  currentBreakpoint: string
  compactType: "vertical" | "horizontal" | null
  mounted: boolean
  layouts: Layouts
  currentTime: Date
}

interface BaseContentConfig {
  type: string
  className?: string
}

interface TextConfig extends BaseContentConfig {
  type: "text"
  content: string
}

interface LinkConfig extends BaseContentConfig {
  type: "link" | "internal-link" | "email"
  content: string
  href: string
}

interface ArticleConfig extends BaseContentConfig {
  type: "article"
  title: string
  description: string
  image?: string
  href: string
}

interface MapConfig extends BaseContentConfig {
  type: "map"
  src: string
}

type ContentConfig = TextConfig | LinkConfig | ArticleConfig | MapConfig

const mobileLayoutOrder = [
  "0", // My name: "Manya Gureja - Design Engineer"
  "1", // Date cell
  "3", // "CURRENTLY" cell
  "4", // "Building a space for unrecognised artists" cell
  "stars1", // First design/stars cell
  "11", // Email cell
  "2", // GitHub cell
  "stars2", // Second design/stars cell
  "7", // PROJECTS cell
  "6", // craft cell
  "8", // Article cell
  "9", // Mapbox/Map cell
]

const generateResponsiveLayouts = (): Layouts => {
  const layouts: Layouts = {}

  const breakpoints = ["lg", "md", "sm", "xs"]
  breakpoints.forEach((breakpoint) => {
    layouts[breakpoint] = [...fixedLayout]

    const hasStars1 = layouts[breakpoint].some((item) => item.i === "stars1")
    if (!hasStars1) {
      // Add stars1 to the layout - position it where it should be (5th position)
      layouts[breakpoint].push({
        i: "stars1",
        x: 8, // Position it in the grid
        y: 0,
        w: 2,
        h: 2,
        static: true,
      })
    }

    console.log(
      `[v0] ${breakpoint} layout includes stars1:`,
      layouts[breakpoint].some((item) => item.i === "stars1"),
    )
  })

  layouts.xxs = mobileLayoutOrder.map((itemId, index) => {
    // Find original item or create placeholder
    const originalItem = fixedLayout.find((item) => item.i === itemId)

    if (originalItem) {
      return {
        ...originalItem,
        x: 0,
        y: index * 2, // Each item takes 2 rows vertically
        w: 2, // Full width on mobile (2 cols)
        h: itemId === "4" ? 2 : 2, // Consistent height
      }
    }

    // Handle stars cells that aren't in original layout
    return {
      i: itemId,
      x: 0,
      y: index * 2,
      w: 2,
      h: 2,
      static: false,
    }
  })

  console.log(
    "[v0] xxs layout includes stars1:",
    layouts.xxs.some((item) => item.i === "stars1"),
  )

  return layouts
}

export default class ResponsiveGridLayout extends React.Component<
  ResponsiveGridLayoutProps,
  ResponsiveGridLayoutState
> {
  static defaultProps: ResponsiveGridLayoutProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: () => {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  }

  state: ResponsiveGridLayoutState = {
    currentBreakpoint: "lg",
    compactType: "vertical",
    mounted: false,
    layouts: generateResponsiveLayouts(),
    currentTime: new Date(),
  }

  intervalId?: NodeJS.Timeout

  componentDidMount() {
    this.setState({ mounted: true })

    this.intervalId = setInterval(() => {
      if (this.state.layouts.lg.some((item) => item.i === "1")) {
        this.setState({ currentTime: new Date() })
      }
    }, 1000)
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId)
  }

  private getContentConfig(): Record<string, ContentConfig> {
    const isMobile = this.state.currentBreakpoint === "xxs"

    return {
      "0": {
        content: "Manya Gureja - Design Engineer",
        type: "text",
      },
      "1": {
        content: this.state.currentTime.toLocaleString(),
        type: "text",
        className: isMobile ? "text-xs" : "text-sm",
      },
      "2": {
        content: "GitHub",
        type: "link",
        href: "https://github.com/manya13gureja",
      },
      "3": {
        content: "CURRENTLY",
        type: "text",
      },
      "4": {
        content: "Building a space for unrecognised artists around the world.",
        type: "link",
        href: "https://example.com",
      },
      "6": {
        content: "craft",
        type: "internal-link",
        href: "/work",
      },
      "7": {
        content: "PROJECTS",
        type: "internal-link",
        href: "/work",
      },
      "8": {
        type: "article",
        title: "Don't trust the (design) process",
        description:
          "There's a strange trend in design lately, we've stopped designing things and started designing the process of designing them. Let's be real in 2025, we've got to stop romanticising \"process\" like it's the product.",
        image: "/writing-cover.png",
        href: "/writing",
      },
      "9": {
        type: "map",
        src: "https://leafletmapcomponent.vercel.app/",
      },
      "11": {
        content: "manyaagureja13@gmail.com",
        type: "email",
        href: "mailto:manyaagureja13@gmail.com",
      },
      stars2: {
        content: ".・。.・゜✭・.",
        type: "text",
      },
    }
  }

  private renderGridItem(itemId: string, isMobile: boolean) {
    const contentConfig = this.getContentConfig()
    const config = contentConfig[itemId]

    if (itemId === "stars1") {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <ThemeToggle />
        </div>
      )
    }

    if (!config) {
      return <p className="text-center">.・。.・゜✭・.</p>
    }

    const baseTextClasses = cn(
      "text-center w-full overflow-hidden",
      isMobile ? "text-sm leading-tight" : "text-base leading-relaxed",
    )

    const linkClasses = cn(baseTextClasses, "underline hover:no-underline transition-all")

    switch (config.type) {
      case "text":
        return <p className={cn(baseTextClasses, config.className)}>{config.content}</p>

      case "link":
        return (
          <a href={config.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
            {config.content}
          </a>
        )

      case "internal-link":
        return (
          <Link href={config.href} className={linkClasses}>
            {config.content}
          </Link>
        )

      case "email":
        return (
          <a
            href={config.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClasses, "break-all", isMobile ? "text-xs" : "text-sm")}
          >
            {config.content}
          </a>
        )

      case "article":
        return (
          <div className={cn("h-full flex flex-col w-full overflow-hidden", isMobile ? "text-xs p-1" : "text-sm p-2")}>
            <div className={cn("w-full flex items-center mb-2", isMobile ? "h-2/5" : "h-3/5")}>
              <img
                src={config.image || "/placeholder.svg"}
                alt="Article cover"
                className="max-h-full max-w-4/5 object-contain rounded-md"
              />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              <h4
                className={cn(
                  "font-bold leading-tight mb-1 overflow-hidden text-ellipsis",
                  isMobile ? "text-sm" : "text-lg",
                )}
              >
                {config.title}
              </h4>
              <p className={cn("leading-tight mb-2 overflow-hidden line-clamp-3", isMobile ? "text-xs" : "text-xs")}>
                {config.description}
              </p>
              <Link href={config.href} className={cn("underline mt-auto", isMobile ? "text-xs" : "text-xs")}>
                READ MORE
              </Link>
            </div>
          </div>
        )

      case "map":
        return (
          <div className="relative w-full h-full">
            <iframe src={config.src} className="w-full h-full block border-none rounded-lg" scrolling="no" title="Leaflet Map" />
            <div className={cn("absolute bottom-2 left-2   px-2 py-1 rounded", isMobile ? "text-xs" : "text-sm")}>
              mapbox
            </div>
          </div>
        )

      default:
        return <p className={baseTextClasses}>.・。.・゜✭・.</p>
    }
  }

  generateDOM() {
    const isMobile = this.state.currentBreakpoint === "xxs"

    console.log(`[v0] Current breakpoint: ${this.state.currentBreakpoint}`)
    console.log(
      `[v0] Items in current layout:`,
      this.state.layouts[this.state.currentBreakpoint].map((item) => item.i),
    )

    return _.map(this.state.layouts[this.state.currentBreakpoint], (item) => {
      return (
        <div
          key={item.i}
          className={cn(
            "border-2  rounded-lg bg-gradient-to-b",
            "flex items-center justify-center overflow-hidden",
            isMobile ? "p-3 min-w-[280px]" : "p-1",
          )}
        >
          {this.renderGridItem(item.i, isMobile)}
        </div>
      )
    })
  }

  onBreakpointChange = (breakpoint: string) => {
    this.setState({ currentBreakpoint: breakpoint })
  }

  onLayoutChange = (layout: Layout[], layouts: Layouts) => {
    this.props.onLayoutChange?.(layout, layouts)
  }

  render() {
    const isMobile = this.state.currentBreakpoint === "xxs"

    return (
      <div className={cn("w-full mx-auto", isMobile ? "p-1 max-w-full" : "p-2")}>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          isDroppable
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          margin={isMobile ? [5, 5] : [10, 10]}
          containerPadding={isMobile ? [5, 0] : [0, 0]}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}
