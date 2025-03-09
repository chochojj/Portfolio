/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'left-0': 'left 0',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'right-0': 'right 0',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    screens: {
      'small': { 'max': '350px' },
      'mobile': { 'max': '480px' },
      'tablet': { 'max': '1159px', 'min': '480px' },
      'lg': { 'min': '720px' },
      'pc': { 'min': '1160px' },
      'xl': { 'min': '1000px' },
      '2xl': { 'min': '1440px' },
      '3xl': { 'min': '2355px' }
    },
    extend: {
      maxWidth: {
        "screen-720": "720px",
        "screen-480": "480px",
        "screen-360": "360px",
      },
      minWidth: {
        "screen-360": "360px",
      },
      colors: {
        warning: "#FF5656",
        success: "#06BE34",
        noti: "#FF4F17",
        "gray-100": "#FCFCFC",
        "gray-150": "#f5f5f5",
        "gray-200": "#EFEFEF",
        "gray-250": "#E8E8E8",
        "gray-300": "#DFDFDF",
        "gray-350": "#C8C8C8",
        "gray-400": "#B7B7B7",
        "gray-450": "#949494",
        "gray-500": "#777777",
        "gray-550": "#616161",
        "gray-600": "#555555",
        "gray-700": "#383838",
        "gray-750": "#2A2A2A",
        "gray-800": "#1F1F1F",
        "gray-900": "#111111",
        "purple-50": "#F4F2FF",
        "purple-100": "#EBE6FF",
        "purple-200": "#D6CCFF",
        "purple-300": "#C2B3FF",
        "purple-400": "#AE9AFE",
        "purple-500": "#9980FE",
        "purple-600": "#8567FE",
        "purple-700": "#714DFE",
        "purple-800": "#42339E",
        "bluegray-100": "#F2F3F7",
      },
      fontSize: {
        "h-1": [
          "1.5rem", // 24px
          {
            lineHeight: "2.063rem",
            fontWeight: "800",
          },
        ],
        "h-2": [
          "1.375rem", // 22px
          {
            lineHeight: "1.875rem",
            fontWeight: "800",
          },
        ],
        "h-3": [
          "1.25rem", // 20px
          {
            lineHeight: "1.75rem",
            fontWeight: "800",
          },
        ],
        "h-4": [
          "1.125rem", // 18px
          {
            lineHeight: "1.563rem",
            fontWeight: "800",
          },
        ],
        "t-1": [
          "1.125rem", // 18px
          {
            lineHeight: "1.375rem",
            fontWeight: "600",
          },
        ],
        "t-2": [
          "1rem", // 16px
          {
            lineHeight: "1.375rem",
            fontWeight: "600",
          },
        ],
        "t-3": [
          "0.875rem", // 14px
          {
            lineHeight: "1.188rem",
            fontWeight: "600",
          },
        ],
        "b-1": [
          "1rem", // 16px
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "b-2": [
          "0.875rem", // 14px
          {
            lineHeight: "1.188rem",
            fontWeight: "400",
          },
        ],
        "c-1": [
          "0.75rem", // 12px
          {
            lineHeight: "0.75rem",
            fontWeight: "700",
          },
        ],
        "c-2": [
          "0.75rem", // 12px
          {
            lineHeight: "0.75rem",
            fontWeight: "400",
          },
        ],
        "c-3": [
          "0.688rem", // 12px
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        "c-2_1": [
          "0.688rem", // 12px
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
      },
      animation: {
        'marquee-left': 'marquee 30s linear infinite',
        'marquee-right': 'marquee2 30s linear infinite',
      },
      keyframes: {
        'marquee': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX( calc( -100% - 1.5rem ))' },
        },
        'marquee2': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX( calc( 100% + 1.5rem ))' },
        },
      },
    },
  },
  plugins: [],
}
