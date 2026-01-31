/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f141a",
        midnight: "#0a0f14",
        platinum: "#e5e7eb",
        accent: "#9fb2c8",
        "accent-strong": "#c7d3e2"
      },
      boxShadow: {
        glow: "0 0 60px rgba(141, 178, 255, 0.18)",
        glass: "0 20px 80px rgba(7, 12, 24, 0.6)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1100px circle at 18% 12%, rgba(255, 255, 255, 0.08), transparent 60%), radial-gradient(800px circle at 78% 18%, rgba(255, 255, 255, 0.05), transparent 55%)",
        "card-sheen":
          "linear-gradient(140deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0))"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        blade: ["var(--font-blade)", "var(--font-display)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease infinite"
      }
    }
  },
  plugins: []
};
