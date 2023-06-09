import { sectionsAtom } from '@src/store/jotai';
import { useAtom } from 'jotai';
import { useRef } from 'react';

type TAddHighlightProps = {
  htmlFor: string;
  index: number;
  subIndex: number;
};

export default function AddHighlight(props: TAddHighlightProps) {
  const { htmlFor, index, subIndex } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [sections, setSections] = useAtom(sectionsAtom);
  const addNewSectionHighlight = () => {
    if (!inputRef.current?.value) {
      alert('text cannot be empty');
      return;
    }
    const value = inputRef.current.value;
    sections[index].items[subIndex].highlights.push(value);
    setSections([...sections]);
  };
  const resetValue = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input type="checkbox" id={htmlFor} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="w-full top-0 right-0 flex flex-row justify-between">
            <span></span>
            <span className="my-auto pl-8 text-white">Add new highlight</span>
            <label htmlFor={htmlFor} className="btn btn-sm btn-circle my-auto">
              ✕
            </label>
          </div>
          <div className="flex flex-col mt-8">
            <textarea ref={inputRef} className="text-white p-4 text-base" cols={50} rows={10}></textarea>

            <div className="flex flex-row flex-wrap justify-between w-[250px] mx-auto mt-5">
              <label htmlFor={htmlFor} className="btn btn-success" onClick={addNewSectionHighlight}>
                Save
              </label>
              <button className="btn btn-warning" onClick={resetValue}>
                Reset
              </button>
              <label htmlFor={htmlFor} className="btn btn-error" onClick={resetValue}>
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
