get666imgmatrix = (scramble) => {
  let cube = {
    up: Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => "w")),
    down: Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => "y")),
    left: Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => "o")),
    right: Array.from({ length: 6 }, () =>
      Array.from({ length: 6 }, () => "r")
    ),
    front: Array.from({ length: 6 }, () =>
      Array.from({ length: 6 }, () => "g")
    ),
    back: Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => "b")),
  };

  rotate_face_clkwise = (face) => {
    current_face = structuredClone(face);

    for (let index = 0; index < 6; index++) {
      face[0][index] = current_face[5 - index][0];
    }

    for (let index = 0; index < 6; index++) {
      face[index][0] = current_face[5][index];
    }

    for (let index = 0; index < 6; index++) {
      face[5][index] = current_face[5 - index][5];
    }

    for (let index = 0; index < 6; index++) {
      face[index][5] = current_face[0][index];
    }

    for (let index = 1; index < 5; index++) {
      face[1][index] = current_face[5 - index][1];
    }

    for (let index = 1; index < 5; index++) {
      face[index][1] = current_face[4][index];
    }

    for (let index = 1; index < 5; index++) {
      face[4][index] = current_face[5 - index][4];
    }

    for (let index = 1; index < 5; index++) {
      face[index][4] = current_face[1][index];
    }

    for (let index = 2; index < 4; index++) {
      face[2][index] = current_face[5 - index][2];
    }

    for (let index = 2; index < 4; index++) {
      face[3][index] = current_face[5 - index][3];
    }

    return face;
  };

  rotate_face_anticlkwise = (face) => {
    rotate_face_clkwise(face);
    rotate_face_clkwise(face);
    rotate_face_clkwise(face);
  };

  u_move = () => {
    front_top_layer = cube.front[0];

    cube.front[0] = cube.right[0];
    cube.right[0] = cube.back[0];
    cube.back[0] = cube.left[0];
    cube.left[0] = front_top_layer;

    rotate_face_clkwise(cube.up);
  };

  uw_move = () => {
    front_2nd_layer = cube.front[1];

    cube.front[1] = cube.right[1];
    cube.right[1] = cube.back[1];
    cube.back[1] = cube.left[1];
    cube.left[1] = front_2nd_layer;

    u_move();
  };

  uw3_move = () => {
    front_3rd_layer = cube.front[2];

    cube.front[2] = cube.right[2];
    cube.right[2] = cube.back[2];
    cube.back[2] = cube.left[2];
    cube.left[2] = front_3rd_layer;

    uw_move();
  };

  rotate_cube_X_clkwise = () => {
    current_cube = structuredClone(cube);

    rotate_face_clkwise(current_cube.right);
    cube.right = current_cube.right;

    rotate_face_anticlkwise(current_cube.left);
    cube.left = current_cube.left;

    cube.front = current_cube.down;

    cube.up = current_cube.front;

    rotate_face_clkwise(current_cube.up);
    rotate_face_clkwise(current_cube.up);
    cube.back = current_cube.up;

    rotate_face_clkwise(current_cube.back);
    rotate_face_clkwise(current_cube.back);
    cube.down = current_cube.back;
  };

  rotate_cube_X_anticlkwise = () => {
    rotate_cube_X_clkwise();
    rotate_cube_X_clkwise();
    rotate_cube_X_clkwise();
  };

  rotate_cube_Z_clkwise = () => {
    current_cube = structuredClone(cube);

    rotate_face_clkwise(current_cube.front);
    cube.front = current_cube.front;

    rotate_face_anticlkwise(current_cube.back);
    cube.back = current_cube.back;

    rotate_face_clkwise(current_cube.up);
    cube.right = current_cube.up;

    rotate_face_clkwise(current_cube.right);
    cube.down = current_cube.right;

    rotate_face_clkwise(current_cube.down);
    cube.left = current_cube.down;

    rotate_face_clkwise(current_cube.left);
    cube.up = current_cube.left;
  };

  rotate_cube_Z_anticlkwise = () => {
    rotate_cube_Z_clkwise();
    rotate_cube_Z_clkwise();
    rotate_cube_Z_clkwise();
  };

  f_move = () => {
    rotate_cube_X_clkwise();
    u_move();
    rotate_cube_X_anticlkwise();
  };

  r_move = () => {
    rotate_cube_Z_anticlkwise();
    u_move();
    rotate_cube_Z_clkwise();
  };

  l_move = () => {
    rotate_cube_Z_clkwise();
    u_move();
    rotate_cube_Z_anticlkwise();
  };

  d_move = () => {
    rotate_cube_X_clkwise();
    rotate_cube_X_clkwise();
    u_move();
    rotate_cube_X_anticlkwise();
    rotate_cube_X_anticlkwise();
  };

  b_move = () => {
    rotate_cube_X_anticlkwise();
    u_move();
    rotate_cube_X_clkwise();
  };

  fw_move = () => {
    rotate_cube_X_clkwise();
    uw_move();
    rotate_cube_X_anticlkwise();
  };

  rw_move = () => {
    rotate_cube_Z_anticlkwise();
    uw_move();
    rotate_cube_Z_clkwise();
  };

  lw_move = () => {
    rotate_cube_Z_clkwise();
    uw_move();
    rotate_cube_Z_anticlkwise();
  };

  dw_move = () => {
    rotate_cube_X_clkwise();
    rotate_cube_X_clkwise();
    uw_move();
    rotate_cube_X_anticlkwise();
    rotate_cube_X_anticlkwise();
  };

  bw_move = () => {
    rotate_cube_X_anticlkwise();
    uw_move();
    rotate_cube_X_clkwise();
  };

  fw3_move = () => {
    rotate_cube_X_clkwise();
    uw3_move();
    rotate_cube_X_anticlkwise();
  };

  rw3_move = () => {
    rotate_cube_Z_anticlkwise();
    uw3_move();
    rotate_cube_Z_clkwise();
  };

  lw3_move = () => {
    rotate_cube_Z_clkwise();
    uw3_move();
    rotate_cube_Z_anticlkwise();
  };

  dw3_move = () => {
    rotate_cube_X_clkwise();
    rotate_cube_X_clkwise();
    uw3_move();
    rotate_cube_X_anticlkwise();
    rotate_cube_X_anticlkwise();
  };

  bw3_move = () => {
    rotate_cube_X_anticlkwise();
    uw3_move();
    rotate_cube_X_clkwise();
  };

  u_prime_move = () => {
    u_move();
    u_move();
    u_move();
  };

  f_prime_move = () => {
    f_move();
    f_move();
    f_move();
  };

  d_prime_move = () => {
    d_move();
    d_move();
    d_move();
  };

  l_prime_move = () => {
    l_move();
    l_move();
    l_move();
  };

  b_prime_move = () => {
    b_move();
    b_move();
    b_move();
  };

  r_prime_move = () => {
    r_move();
    r_move();
    r_move();
  };

  uw_prime_move = () => {
    uw_move();
    uw_move();
    uw_move();
  };

  fw_prime_move = () => {
    fw_move();
    fw_move();
    fw_move();
  };

  dw_prime_move = () => {
    dw_move();
    dw_move();
    dw_move();
  };

  lw_prime_move = () => {
    lw_move();
    lw_move();
    lw_move();
  };

  bw_prime_move = () => {
    bw_move();
    bw_move();
    bw_move();
  };

  rw_prime_move = () => {
    rw_move();
    rw_move();
    rw_move();
  };

  uw3_prime_move = () => {
    uw3_move();
    uw3_move();
    uw3_move();
  };

  fw3_prime_move = () => {
    fw3_move();
    fw3_move();
    fw3_move();
  };

  dw3_prime_move = () => {
    dw3_move();
    dw3_move();
    dw3_move();
  };

  lw3_prime_move = () => {
    lw3_move();
    lw3_move();
    lw3_move();
  };

  bw3_prime_move = () => {
    bw3_move();
    bw3_move();
    bw3_move();
  };

  rw3_prime_move = () => {
    rw3_move();
    rw3_move();
    rw3_move();
  };

  scramble_simplifier = () => {
    let simplified_scramble_arr = [];
    let scramble_arr = scramble.split(" ");

    scramble_arr.forEach((element) => {
      if (element.includes("2")) {
        simplified_scramble_arr.push(element.replace("2", ""));
        simplified_scramble_arr.push(element.replace("2", ""));
      } else {
        simplified_scramble_arr.push(element);
      }
    });
    return simplified_scramble_arr;
  };

  img_matrix_gen = () => {
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
        case "Uw":
          uw_move();
          break;
        case "Uw'":
          uw_prime_move();
          break;
        case "Fw":
          fw_move();
          break;
        case "Fw'":
          fw_prime_move();
          break;
        case "Dw":
          dw_move();
          break;
        case "Dw'":
          dw_prime_move();
          break;
        case "Lw":
          lw_move();
          break;
        case "Lw'":
          lw_prime_move();
          break;
        case "Bw":
          bw_move();
          break;
        case "Bw'":
          bw_prime_move();
          break;
        case "Rw":
          rw_move();
          break;
        case "Rw'":
          rw_prime_move();
          break;

        case "3Rw":
          rw3_move();
          break;
        case "3Rw'":
          rw3_prime_move();
          break;
        case "3Uw":
          uw3_move();
          break;
        case "3Uw'":
          uw3_prime_move();
          break;
        case "3Fw":
          fw3_move();
          break;
        case "3Fw'":
          fw3_prime_move();
          break;
        case "3Dw":
          dw3_move();
          break;
        case "3Dw'":
          dw3_prime_move();
          break;
        case "3Lw":
          lw3_move();
          break;
        case "3Lw'":
          lw3_prime_move();
          break;
        case "3Bw":
          bw3_move();
          break;
        case "3Bw'":
          bw3_prime_move();
          break;

        default:
          break;
      }
    });
  };
  img_matrix_gen();

  return cube;
};

module.exports = {
  get666imgmatrix,
};
