import { KeyboardSensor, PointerSensor, TouchSensor, useSensor } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";


export const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(TouchSensor),
  useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates}),
);

export default useSensors;