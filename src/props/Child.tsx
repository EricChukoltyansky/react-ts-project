interface ChildProps {
  color: string;
  onClick: () => void;
}

// First, we create a function component that accepts a color prop.
// We use the ChildProps interface to define the shape of the props.

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Second, we create a fuction components as React.FC that accepts a color prop.
// We use the ChildProps interface to define the shape of the props.

// React.FC is a function component that accepts props and returns JSX.
// React.FC is a type alias for React.FunctionComponent.
// React.FC is a type alias for React.FunctionComponent<ChildProps>
// React.FC accepts children without any error

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
