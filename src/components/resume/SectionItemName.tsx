import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemName({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionItemName_${index}`;
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight} font-bold`}>
        {value}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} />
    </>
  );
}
