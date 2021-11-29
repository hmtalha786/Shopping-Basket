import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h5 className="navbar-brand"> Shopping Basket 🛍️</h5>

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <h5>🛒</h5>
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Checkout 💵
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Hydrogen is the chemical element with the symbol H and atomic
                number 1. Hydrogen is the lightest element. At standard
                conditions hydrogen is a gas of diatomic molecules having the
                formula H2. It is colorless, odorless, non-toxic, and highly
                combustible. Hydrogen is the most abundant chemical substance in
                the universe, constituting roughly 75% of all normal
                matter.[8][note 1] Stars such as the Sun are mainly composed of
                hydrogen in the plasma state. Most of the hydrogen on Earth
                exists in molecular forms such as water and organic compounds.
                For the most common isotope of hydrogen (symbol 1H) each atom
                has one proton, one electron, and no neutrons. In the early
                universe, the formation of protons, the nuclei of hydrogen,
                occurred during the first second after the Big Bang. The
                emergence of neutral hydrogen atoms throughout the universe
                occurred about 370,000 years later during the recombination
                epoch, when the plasma had cooled enough for electrons to remain
                bound to protons.[9] Hydrogen is nonmetallic, except at
                extremely high pressures, and readily forms a single covalent
                bond with most nonmetallic elements, forming compounds such as
                water and nearly all organic compounds. Hydrogen plays a
                particularly important role in acid–base reactions because these
                reactions usually involve the exchange of protons between
                soluble molecules. In ionic compounds, hydrogen can take the
                form of a negative charge (i.e., anion) where it is known as a
                hydride, or as a positively charged (i.e., cation) species
                denoted by the symbol H+. The H+ cation is simply a proton
                (symbol p) but its behavior in aqueous solutions and in ionic
                compounds involves screening of its electric charge by nearby
                polar molecules or anions. Because hydrogen is the only neutral
                atom for which the Schrödinger equation can be solved
                analytically,[10] the study of its energetics and chemical
                bonding has played a key role in the development of quantum
                mechanics.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
