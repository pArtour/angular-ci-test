module.exports = {
  ci: {
    // ...
    assert: {
      // preset: "lighthouse:recommended",
      // numberOfRuns: 1,
      // ignoreDuplicateBuildFailure: true,
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.7 }],
        // "categories:seo": ["error", { minScore: 0.95 }],
        "first-contentful-paint": ["error", { maxNumericValue: 2000 }],
        "speed-index": ["error", { maxNumericValue: 3000 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        interactive: ["warn", { maxNumericValue: 5000 }],
        "total-blocking-time": ["warn", { maxNumericValue: 300 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
      },
    },
    // upload: {
    //   target: "temporary-public-storage",
    // },
    // ...
    collect: {
      url: ["http://localhost:4200/"],
      staticDistDir: "./dist/angular-ci",
      isSinglePageApplication: true,
      settings: {
        chromeFlags: "--disable-gpu --no-sandbox",
      },
    },
  },
};
