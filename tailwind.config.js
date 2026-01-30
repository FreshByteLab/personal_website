/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f16",
        midnight: "#06080d",
        platinum: "#e5e7eb",
        accent: "#8db2ff",
        "accent-strong": "#a7c4ff"
      },
      boxShadow: {
        glow: "0 0 60px rgba(141, 178, 255, 0.18)",
        glass: "0 20px 80px rgba(7, 12, 24, 0.6)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px circle at 15% 10%, rgba(141, 178, 255, 0.15), transparent 55%), radial-gradient(1000px circle at 85% 20%, rgba(255, 255, 255, 0.06), transparent 50%)",
        "card-sheen":
          "linear-gradient(140deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0))"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
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
