import reducers from 'state/reducers';
import actions from 'state/actions';

beforeAll(() => {
  return jest.dontMock("../src/state/actionTypes");
});

describe("DidILockMyDoor reducers", () => {
  const defaultState = {
    locked: false, 
    TOSRead: false
  };

  it("should return default state, when called with undefined state", () => {
    expect(reducers(undefined, {})).toEqual(defaultState);
  });

  it("should set TOSRead into true, when setTOSAsRead action is called", () => {
    expect(reducers(defaultState, actions.setTOSAsRead())).toEqual(Object.assign({}, defaultState, {
      TOSRead: true
    }));
  });

  it("should set locked state into false when called setLockState action with false argument", () => {
    expect(reducers(defaultState, actions.setLockState(false))).toEqual(Object.assign({}, defaultState, {
      locked: false
    }));
  });

  it("should set locked state into true when called setLockState actio with true argument", () => {
    expect(reducers(defaultState, actions.setLockState(true))).toEqual(Object.assign({}, defaultState, {
      locked: true
    }));
  })
});