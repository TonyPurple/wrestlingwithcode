import { useState } from "react";
import { Link, Copy } from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

interface ShareButtonProps {
  title: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Facebook",
      icon: <SiFacebook className="w-5 h-5" />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: "X",
      icon: <SiX className="w-5 h-5" />,
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    },
  ];

  const handleShare = (link: string) => {
    window.open(link, "_blank", "width=600,height=400");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
        {shareLinks.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleShare(platform.link)}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={`Share on ${platform.name}`}
          >
            {platform.icon}
          </button>
        ))}
        <button
          onClick={handleCopyLink}
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Copy link"
        >
          {copied ? (
            <Copy className="w-5 h-5 text-green-600" />
          ) : (
            <Link className="w-5 h-5" />
          )}
        </button>
      </div>
      {copied && <span className="text-green-600 text-sm">Link copied!</span>}
    </div>
  );
};

export default ShareButton;
