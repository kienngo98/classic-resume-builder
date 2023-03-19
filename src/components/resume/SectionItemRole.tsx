import { classHoverHighlight } from '@src/constants/tailwind';
import { useState } from 'react';
import TextInputEditor from '../modals/TextInputEditor';

export default function SectionItemRole({ defaultValue, index }: { defaultValue: string; index: number }) {
  const htmlFor: string = `sectionItemTitle_${index}`;
  const [value, setValue] = useState<string>(defaultValue);
  return (
    <>
      <label htmlFor={htmlFor} className={`${classHoverHighlight}`}>
        {value}
      </label>
      <TextInputEditor defaultValue={value} htmlFor={htmlFor} saveFn={setValue} title="Edit role" />
    </>
  );
}
