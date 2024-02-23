import { Fragment } from "react";

import { useState } from "react";

// {items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item:string => void)
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //hook

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const [name, setName] = useState("");
  // const handleClick = (event: MouseEvent) => console.log(event);

  // event handler
  //methode 1 : stocker dans une const ou une fonction
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/*methode 2 : utiliser les opérateurs &&
       {getMessage()} */}

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
