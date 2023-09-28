interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-5 shadow-lg rounded-md">
      {children}
    </div>
  );
};

export default CardContainer;
