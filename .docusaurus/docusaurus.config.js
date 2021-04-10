export default {
  "title": "IDEP Docs",
  "tagline": "IDEP Network Documentation",
  "url": "https://docs.idep.network",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/idepfavicon.ico",
  "organizationName": "IDEP-Network",
  "projectName": "IDEP-Docs",
  "themeConfig": {
    "navbar": {
      "title": "IDEP Docs",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo_mark.svg"
      },
      "items": [
        {
          "href": "https://github.com/idep-network",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Roadmap",
              "to": "/Roadmap"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/Jrarctk4hG"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/idepnetwork"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/Idep-network"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 IDEP Network"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "theme": {
          "customCss": [
            "/home/robinzon/code/Oxeni/projects/IDEP-Docs/src/css/custom.css"
          ]
        },
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/home/robinzon/code/Oxeni/projects/IDEP-Docs/sidebars.js",
          "editUrl": "https://github.com/IDEP-network/IDEP-Docs"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};