const INITIAL_STATE: Array<Notes> = [];

interface Notes {
  id: number;
  title: string;
  description: string;
};

interface Action {
  type: string;
  notes: Notes;
};

const notes = (state = INITIAL_STATE, action:Action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default notes;