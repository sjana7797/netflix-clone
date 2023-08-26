import { useCallback, useState } from "react";

const useDropdownToggle = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return { open, toggle };
};

export default useDropdownToggle;
