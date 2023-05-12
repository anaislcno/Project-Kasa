import React from "react";
import "../HostCard/HostCard.scss"

function HostCard ({ host }) {
    return (
      <section>
        <div className="host-container">
          <h2 className="host-card__name">{host.name}</h2>
          <img className="host-card__img" src={host.picture} alt={host.name} />
        </div>
      </section>
    );
  }

export default HostCard
