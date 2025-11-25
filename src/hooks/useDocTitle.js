import { useEffect } from 'react';

document.title = 'ClickStore';
const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - ClickStore`;
        }
    });

    return null;
};

export default useDocTitle;
