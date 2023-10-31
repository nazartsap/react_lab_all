import React, {useMemo} from "react";

let renderCount = 0;


const IsFive = ({ value }) => {
    console.warn(`🔴 isFive render: ${++renderCount}`);

    const result = useMemo(() => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
      }, [value]);

    return <h3>{result}</h3>;
  };

  export default IsFive;