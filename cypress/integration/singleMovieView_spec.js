describe('Dashboard', () => {

  it('should display a backdrop image with title at the top', () => {
    cy.visit('http://localhost:3000/movie/581392')
      .get('.backdrop')
      .should('have.css', 'background-image')
      .get('.backdrop')
      .children('h2')
  });

  it('should contain a tagline underneath the backdrop', () => {
    cy.visit('http://localhost:3000/movie/581392')
      .get('.backdrop')
      .siblings('.tagline')
  });

  it('should contain single movie info underneath tagline', () => {
    cy.visit('http://localhost:3000/movie/581392')
        .get('.single-movie-info')
        .children('.movie-poster')
        .siblings('.movie-details')
  });

  it('should display a video, overview, and details within movie-details', () => {
    cy.visit('http://localhost:3000/movie/581392')
      .get('.movie-details')
      .children('.videos')
      .siblings('.overview')
      .siblings('.details')
  });

  it('should be able to click the X to return to the dashboard view', () => {
    cy.visit('http://localhost:3000/movie/581392')
        .get('.exit-single-movie-view')
        .click()
          .get('.dashboard')
  });

});
