import Image from 'next/image';

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = 15,
  height = 15,
  color = 'currentColor',
}) => {
  return (
    <div style={{ width, height, color }}>
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={`${name} icon`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Icon;
