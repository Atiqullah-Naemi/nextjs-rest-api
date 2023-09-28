interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto my-10">{children}</div>
  );
};

export default Container;
