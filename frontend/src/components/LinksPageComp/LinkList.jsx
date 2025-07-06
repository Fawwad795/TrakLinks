import React from 'react';
import LinkCard from './LinkCard';
import EmptyState from '../GeneralComp/EmptyState';
import dummyLinks from '../../constants/dummyLinks';

const LinkList = () => {
  // In a real app, you would fetch links from an API
  const links = dummyLinks;
  const hasLinks = links.length > 0;

  return (
    <div className="w-full h-full">
      {hasLinks ? (
        <div className="space-y-3 py-2">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <EmptyState
            title="No links yet"
            description="Create your first link to get started"
            buttonText="Create Link"
            buttonAction={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default LinkList; 