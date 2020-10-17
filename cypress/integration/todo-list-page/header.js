import moment from 'moment';

describe('header', () => {
  const langs = ['en', 'ru'];

  it('switch language', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1800, 950);

    cy.get('header').within(() => {
      cy.get('h1').contains('Todo List');
      cy.get('button').contains('en');
    });

    cy.get('button').contains('en').click();
    cy.get('ul[role=listbox]').find('li').should('have.length', 2);
    cy.get('li[aria-selected=false]').scrollIntoView().click();

    cy.get('header').within(() => {
      cy.get('h1').contains('Список задач');
      cy.get('button').contains('ru');
    });

    cy.get('button').contains('ru').click();
    cy.get('ul[role=listbox]').find('li').should('have.length', 2);
    cy.get('li[aria-selected=false]').scrollIntoView().click();
  });

  it('hide/visible header', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1800, 150);

    cy.scrollTo(0, 300);
    cy.get('.Header_header__11SvH')
      .should('not.have.class', 'Header_showHeader__2O3Re')
      .should('not.be.visible');

    cy.scrollTo(0, 250);
    cy.wait(200);
    cy.get('.Header_header__11SvH')
      .should('have.class', 'Header_showHeader__2O3Re')
      .should('have.class', 'Header_transparent__34ew3')
      .should('be.visible');

    cy.scrollTo(0, 0)
      .get('.Header_header__11SvH')
      .should('have.class', 'Header_showHeader__2O3Re')
      .should('not.have.class', '.Header_transparent__34ew3')
      .should('be.visible');
  });
});
