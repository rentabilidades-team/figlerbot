function random(min, max) {
    if (min == null || max == null) { console.log('Error: random_number(min,max); El valor min o max es null.'); } else {
        try {
            min = parseInt(min);
            max = parseInt(max);
        } catch (e) { console.log(e); }
        return Math.floor((Math.random() * max) + min);
    }
}

export {random};
