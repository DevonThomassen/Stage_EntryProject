
const values = [
  '5',
  '10',
  '15',
  '20'
]

export function pagination() {

  it('Random pagination spam click', () => {
    
    cy.url().should('contain', '/dashboard')

    for (const value of values) {
      cy.get('#select').select(value)

      let x = cy.get('.page > p').then((v) => {
        
        const x = v.text();
        const _temp = x.search("the");
        const totalPages = x.substring(_temp + "temp".length);
        cy.log(totalPages)

        for (let i = 0; i < totalPages; i++) {
          cy.get('[title="Next page"]').click()
        }
        for (let i = 0; i < totalPages; i++) {
          cy.get('[title="Previous page"]').click()
        
        }
      });
    }
  });

}