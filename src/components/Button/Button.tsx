import { Typography } from "@/components/Typography";

type TButtonProps = {
  children: string;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center h-14 min-w-38.25 w-fit bg-button rounded-[200px] cursor-pointer hover:bg-button-hover"
    >
      <Typography name="button" color="white">
        {children}
      </Typography>
    </button>
  );
};
