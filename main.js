const getStars = (rating) => {
    const rounded = Math.round(rating);

    return "⭐".repeat(rounded) + "☆".repeat(5-rounded);
};