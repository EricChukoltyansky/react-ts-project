interface ChildProps {
  color: string;
}

// First, we create a function component that accepts a color prop.
// We use the ChildProps interface to define the shape of the props.

// export const Child = ({ color }: ChildProps) => {
//   return (
//     <div>
//       <h1>{color}</h1>
//     </div>
//   );
// };

// Second, we create a fuction components as React.FC that accepts a color prop.
// We use the ChildProps interface to define the shape of the props.

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};
