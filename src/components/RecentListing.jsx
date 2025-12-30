import React from 'react';
import Title from './Title';
import { useSelector } from 'react-redux';
import { CardStack } from './ui/card-stack';

const RecentListing = () => {
  const { listings } = useSelector((state) => state.listing);

  if (!Array.isArray(listings) || listings.length === 0) return null;

  return (
    <div className="mt-20 mb-13">
      <Title
        title="Recent Listings"
        desc="Explore our latest listings of profiles from various platforms."
      />

      <div className="flex justify-center mt-15">
        <CardStack items={listings.slice(0, 4)} />
      </div>
    </div>
  );
};

export default RecentListing;
