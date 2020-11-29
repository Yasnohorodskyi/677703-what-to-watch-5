import React from "react";
import renderer from "react-test-renderer";
import withVideoHandling from "./with-video-handling";
import {mockFilm} from "../../const.js";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withVideoHandling(MockComponent);

it(`withVideoHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        src={mockFilm.video}
        onVideoMount={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});

