import chefLogo from "@/assets/chef-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  variant?: "light" | "dark";
}

const Logo = ({ size = "md", showTagline = false, variant = "dark" }: LogoProps) => {
  const sizes = {
    sm: {
      image: "w-10 h-10",
      text: "text-lg",
      tagline: "text-[8px]",
    },
    md: {
      image: "w-14 h-14",
      text: "text-xl",
      tagline: "text-[10px]",
    },
    lg: {
      image: "w-20 h-20",
      text: "text-3xl",
      tagline: "text-xs",
    },
  };

  const colors = {
    light: {
      text: "text-cream",
      tagline: "text-cream/70",
      ring: "ring-gold/50",
    },
    dark: {
      text: "text-primary",
      tagline: "text-muted-foreground",
      ring: "ring-primary/20",
    },
  };

  return (
    <div className="flex items-center gap-2">
      {/* Chef Logo Image */}
      <div className={`${sizes[size].image} rounded-full overflow-hidden ring-2 ${colors[variant].ring}`}>
        <img 
          src={chefLogo} 
          alt="Shukla Caterers Chef Logo" 
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading font-bold ${sizes[size].text} ${colors[variant].text} tracking-wide`}
        >
          SHUKLA
        </span>
        {showTagline && (
          <span className={`${sizes[size].tagline} ${colors[variant].tagline} tracking-wider`}>
            Caterers | Since 2010
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
