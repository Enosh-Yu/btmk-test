import Link from "next/link";

export const options = [
    {
      value: 'Old Testament',
      label: 'Old Testament',
    },
    {
      value: 'Genesis',
      label: <Link href="/programs/old/genesis">{'Genesis'}</Link>,
    },
    {
      value: 'Exodus',
      label: <Link href="/programs/old/exodus">{'Exodus'}</Link>,
    },
  ];