module.exports = {
  config: {
    blogTitle: 'For 91 days in Ghana',
    blogSlogan: `A simple example project of a TravelFeed-powered static blog`,
    pages: [
      {
        title: 'About Us',
        permlink: 'about',
        body: `Lorem ipsum dolor sit amet, vix fugit dolor ea, quo ne agam nonumy. Nam cibo electram patrioque ne, vide pertinax cum cu. Ne quo falli viderer evertitur. Qui tale quaestio evertitur et. Sed menandri senserit liberavisse et, wisi discere lobortis pri in, an vix audiam scaevola postulant.
        <h2>You can use HTML in custom pages</h2>
        <p>Isn't that <strong>awesome</strong>?</p>
        `,
        showInNavbar: true,
      },
      {
        title: 'Contact',
        permlink: 'contact',
        body: 'You can contact us at email@example.com or in social media',
        showInFooter: true,
      },
      {
        title: 'Terms',
        permlink: 'terms',
        body: 'A lot of legal blabla',
        showInFooter: true,
      },
    ],
  },
};
