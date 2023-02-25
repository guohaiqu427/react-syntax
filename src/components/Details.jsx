import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetch/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPetContext";

function Details() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const result = useQuery(["pet", id], fetchPet);
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  let pet = {};
  if (!result.isLoading) {
    pet = result.data.pets[0]; // rewrite here!
    console.log(pet);
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      {pet.name}
      <button
        onClick={() => {
          setShowModal(true);
          console.log(showModal);
        }}
      >
        show
      </button>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default function DetailsErrorBoundaries() {
  return (
    <ErrorBoundaries>
      <Details />
    </ErrorBoundaries>
  );
}
