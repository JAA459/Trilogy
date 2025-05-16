// Import useReducer
import React, { useReducer, useState } from 'react';

// Import type variables
import { ADD_STUDENT, REMOVE_STUDENT } from '../utils/actions';

// Import reducer from our utils folder
import reducer from '../utils/reducers';

import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  const initialState = useStudentContext();

  // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  return (
    <div>
      {/* Now accessing students from our state object returned from the useReducer hook */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* Access students from our state object returned from useReducer */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      {/* We replace our removeStudent method with our dispatch function passing the type and payload */}
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 StudentList.js: Dispatched remove!');
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* Access our majors array from our state object returned from useReducer */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  console.log('🚀 StudentList.js: Dispatched add student! ');
                  return dispatch({
                    type: ADD_STUDENT,
                    payload: { name: newStudentName, major: newStudentMajor },
                  });
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
