import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: 'q8xzrvps',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skInYtFVuJLUMaM5xsWtJQcoRDLIz806XHtycu0AVihdO6gg6rNy8AJTqz0I5fXrjN0rFEQsz9sYi6SVXUa4DdOCWSXzqWwhZ3C7Gyizv2LsrVQmREwktMfkXCoq7n26PAuGupyGYc5AjwCX793Qb5OgHOgjcJRcb5CIJLEufNZfMCoojMBc',

});

const builder = imageUrlBuilder(client);

export const urlFlor = (source) => builder.image(source);