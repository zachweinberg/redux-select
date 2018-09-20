export const selectLibrary = (library_id) => {
  return {
    type: 'select_library',
    payload: library_id

  };
};
