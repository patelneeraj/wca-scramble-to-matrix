get333imgmatrix = (scramble_provided) => {
  cube = {
    up: [
      ["w", "w", "w"],
      ["w", "w", "w"],
      ["w", "w", "w"],
    ],
    front: [
      ["g", "g", "g"],
      ["g", "g", "g"],
      ["g", "g", "g"],
    ],
    right: [
      ["r", "r", "r"],
      ["r", "r", "r"],
      ["r", "r", "r"],
    ],
    left: [
      ["o", "o", "o"],
      ["o", "o", "o"],
      ["o", "o", "o"],
    ],
    down: [
      ["y", "y", "y"],
      ["y", "y", "y"],
      ["y", "y", "y"],
    ],
    back: [
      ["b", "b", "b"],
      ["b", "b", "b"],
      ["b", "b", "b"],
    ],
  };

  rotate_face_clkwise = (face) => {
    let current_face = structuredClone(face);

    face[2][0] = current_face[2][2];
    face[2][1] = current_face[1][2];
    face[2][2] = current_face[0][2];

    face[1][0] = current_face[2][1];
    face[1][1] = current_face[1][1];
    face[1][2] = current_face[0][1];

    face[0][0] = current_face[2][0];
    face[0][1] = current_face[1][0];
    face[0][2] = current_face[0][0];

    return face;
  };

  u_move = () => {
    temp_f_row = cube.front[0];

    cube.front[0] = cube.right[0];
    cube.right[0] = cube.back[0];
    cube.back[0] = cube.left[0];
    cube.left[0] = temp_f_row;

    cube.up = rotate_face_clkwise(cube.up);
  };
  u_prime_move = () => {
    u_move();
    u_move();
    u_move();
  };

  d_move = () => {
    b_2 = cube.back[2];

    cube.back[2] = cube.right[2];
    cube.right[2] = cube.front[2];
    cube.front[2] = cube.left[2];
    cube.left[2] = b_2;

    cube.down = rotate_face_clkwise(cube.down);
  };
  d_prime_move = () => {
    d_move();
    d_move();
    d_move();
  };

  r_move = () => {
    front_02 = cube.front[0][2];
    front_12 = cube.front[1][2];
    front_22 = cube.front[2][2];

    cube.front[0][2] = cube.down[0][2];
    cube.front[1][2] = cube.down[1][2];
    cube.front[2][2] = cube.down[2][2];

    cube.down[0][2] = cube.back[2][0];
    cube.down[1][2] = cube.back[1][0];
    cube.down[2][2] = cube.back[0][0];

    cube.back[0][0] = cube.up[2][2];
    cube.back[1][0] = cube.up[1][2];
    cube.back[2][0] = cube.up[0][2];

    cube.up[0][2] = front_02;
    cube.up[1][2] = front_12;
    cube.up[2][2] = front_22;

    cube.right = rotate_face_clkwise(cube.right);
  };
  r_prime_move = () => {
    r_move();
    r_move();
    r_move();
  };

  l_move = () => {
    front_00 = cube.front[0][0];
    front_10 = cube.front[1][0];
    front_20 = cube.front[2][0];

    cube.front[0][0] = cube.up[0][0];
    cube.front[1][0] = cube.up[1][0];
    cube.front[2][0] = cube.up[2][0];

    cube.up[0][0] = cube.back[2][2];
    cube.up[1][0] = cube.back[1][2];
    cube.up[2][0] = cube.back[0][2];

    cube.back[2][2] = cube.down[0][0];
    cube.back[1][2] = cube.down[1][0];
    cube.back[0][2] = cube.down[2][0];

    cube.down[0][0] = front_00;
    cube.down[1][0] = front_10;
    cube.down[2][0] = front_20;

    cube.left = rotate_face_clkwise(cube.left);
  };
  l_prime_move = () => {
    l_move();
    l_move();
    l_move();
  };

  f_move = () => {
    right_00 = cube.right[0][0];
    right_10 = cube.right[1][0];
    right_20 = cube.right[2][0];

    cube.right[0][0] = cube.up[2][0];
    cube.right[1][0] = cube.up[2][1];
    cube.right[2][0] = cube.up[2][2];

    cube.up[2][2] = cube.left[0][2];
    cube.up[2][1] = cube.left[1][2];
    cube.up[2][0] = cube.left[2][2];

    cube.left[0][2] = cube.down[0][0];
    cube.left[1][2] = cube.down[0][1];
    cube.left[2][2] = cube.down[0][2];

    cube.down[0][0] = right_20;
    cube.down[0][1] = right_10;
    cube.down[0][2] = right_00;

    cube.front = rotate_face_clkwise(cube.front);
  };
  f_prime_move = () => {
    f_move();
    f_move();
    f_move();
  };

  b_move = () => {
    up_00 = cube.up[0][0];
    up_01 = cube.up[0][1];
    up_02 = cube.up[0][2];

    cube.up[0][0] = cube.right[0][2];
    cube.up[0][1] = cube.right[1][2];
    cube.up[0][2] = cube.right[2][2];

    cube.right[0][2] = cube.down[2][2];
    cube.right[1][2] = cube.down[2][1];
    cube.right[2][2] = cube.down[2][0];

    cube.down[2][2] = cube.left[2][0];
    cube.down[2][1] = cube.left[1][0];
    cube.down[2][0] = cube.left[0][0];

    cube.left[2][0] = up_00;
    cube.left[1][0] = up_01;
    cube.left[0][0] = up_02;

    cube.back = rotate_face_clkwise(cube.back);
  };
  b_prime_move = () => {
    b_move();
    b_move();
    b_move();
  };

  scramble_simplifier = (scramble) => {
    let simplified_scramble_arr = [];
    scramble_arr = scramble.split(" ");

    for (let i = 0; i < scramble_arr.length; i++) {
      if (scramble_arr[i].includes("2")) {
        simplified_scramble_arr.push(scramble_arr[i][0]);
        simplified_scramble_arr.push(scramble_arr[i][0]);
      } else {
        simplified_scramble_arr.push(scramble_arr[i]);
      }
    }
    return simplified_scramble_arr;
  };

  img_matrix_gen = (scramble) => {
    let simplified_scramble = scramble_simplifier(scramble);
    simplified_scramble.forEach((move) => {
      switch (move) {
        case "R":
          r_move();
          break;
        case "R'":
          r_prime_move();
          break;
        case "L":
          l_move();
          break;
        case "L'":
          l_prime_move();
          break;
        case "U":
          u_move();
          break;
        case "U'":
          u_prime_move();
          break;
        case "D":
          d_move();
          break;
        case "D'":
          d_prime_move();
          break;
        case "F":
          f_move();
          break;
        case "F'":
          f_prime_move();
          break;
        case "B":
          b_move();
          break;
        case "B'":
          b_prime_move();
          break;

        default:
          break;
      }
    });
    return cube;
  };
  return img_matrix_gen(scramble_provided);
};

module.exports = {
  get333imgmatrix,
};
