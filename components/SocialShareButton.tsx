import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SocialShareButton } from 'react-social-sharing';

interface SocialShareButtonProps {
  url: string;
  title: string;
  description: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  url,
  title,
  description,
}) => {
  const [platform, setPlatform] = useState('facebook');
  const { data: session } = useSession();

  const handlePlatformChange = (platform: string) => {
    setPlatform(platform);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-500">Share on:</span>
      <div className="flex space-x-2">
        <button
          onClick={() => handlePlatformChange('facebook')}
          className={`px-2 py-1 rounded-md ${
            platform === 'facebook' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <FaFacebook className="text-lg" />
        </button>
        <button
          onClick={() => handlePlatformChange('twitter')}
          className={`px-2 py-1 rounded-md ${
            platform === 'twitter' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <FaTwitter className="text-lg" />
        </button>
        <button
          onClick={() => handlePlatformChange('instagram')}
          className={`px-2 py-1 rounded-md ${
            platform === 'instagram' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <FaInstagram className="text-lg" />
        </button>
      </div>
      {session && (
        <SocialShareButton
          url={url}
          title={title}
          description={description}
          platform={platform}
        />
      )}
    </div>
  );
};

export default SocialShareButton;