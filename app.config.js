// app.config.js
export default {
  expo: {
    name: "ملاحظات",
    slug: "mula7athat",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#6c63ff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.smartnotes.app"
    },
    android: {
      package: "com.smartnotes.app",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#6c63ff"
      },
      permissions: []
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "24232a98-5969-43a1-99e6-862910d4e6f2"
      }
    }
  }
};
