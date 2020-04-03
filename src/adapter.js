const redefinitionOffers = (offersData) => {
  const newOffers = [];
  offersData.forEach((offerData) => {
    const newOffer = {
      id: offerData.id,
      previewImage: offerData.preview_image,
      photos: offerData.images,
      city: offerData.city,
      map: {
        location: [offerData.location.latitude, offerData.location.longitude],
        zoom: offerData.location.zoom,
      },
      title: offerData.title,
      descr: offerData.description,
      price: offerData.price,
      type: offerData.type,
      badrooms: offerData.badrooms,
      guests: offerData.max_adults,
      rating: offerData.rating,
      isFavorite: offerData.is_favorite,
      isPremium: offerData.is_premium,
      features: offerData.goods,
      author: {
        name: offerData.host.name,
        avatar: offerData.host.avatar_url,
        isSuper: offerData.host.is_pro,
        id: offerData.host.id,
      },
    };
    newOffers.push(newOffer);
  });
  return newOffers;
};

export {redefinitionOffers};
