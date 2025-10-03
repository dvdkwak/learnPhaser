class util {
  
  /**
   * Calculates the magnitude of the vector.
   *
   * @param {number} x - The horizontal component of the vector.
   * @param {number} y - The vertical component of the vector.
   * @return {number} The magnitude of the vector.
   */
  static getMagnitude(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  /**
   * Checks if any of the vector components are non-zero.
   *
   * @param {number} x - The horizontal component of the vector.
   * @param {number} y - The vertical component of the vector.
   * @return {boolean} The result of the check.
   */
  static checkNonZeroComponents(x, y) {
    return Math.abs(x) > 0 || Math.abs(y) > 0;
  }

  /**
   * Calculates the normalized velocity vector.
   *
   * @param {number} x - The horizontal component of the vector.
   * @param {number} y - The vertical component of the vector.
   * @return {number} The normalized velocity vector.
   */
  static getNormalization(x, y) {
    return this.checkNonZeroComponents(x, y) ? 1 / this.getMagnitude(x, y) : 0;
  }

}

export default util;