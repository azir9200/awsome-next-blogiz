export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Services",
      href: "/service",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Services",
      href: "/service",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
