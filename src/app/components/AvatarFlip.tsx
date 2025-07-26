import Image from 'next/image';
const Avatar = ({ 
  defaultImage = '/avatar.png', 
  hoverImage = '/headshot.jpeg',
  alt = 'Avatar',
  size = 150 
}) => {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      <div className="avatar-flip">
        <div className="avatar-front">
          <Image
            src={defaultImage}
            alt={alt}
            width={size}
            height={size}
            className="avatar-image"
          />
        </div>
        <div className="avatar-back">
          <Image
            src={hoverImage}
            alt={`${alt} - real photo`}
            width={size}
            height={size}
            className="avatar-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;