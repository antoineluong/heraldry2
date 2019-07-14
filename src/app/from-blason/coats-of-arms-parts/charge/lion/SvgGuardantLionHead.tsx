import React from 'react';

//Thanks to https://en.wikipedia.org/wiki/File:Lion_Rampant.svg

type Props = {tongueFill: string, mainFill: string}
const SvgGuardantLionHead = (props: Props) => (
  <g>
    <path
      d="M143.86 47.42s-.697-5.058.02-7.046c1.392-3.864 7.021-6.82 8.704-10.566 1.12-2.492 1.41-8.997 1.41-8.997s7.557 1.91 10.253 3.775c2.25 1.557 4.796 4.506 4.796 4.506s.74-3.11 1.804-5.099c1.233-2.307 4.257-3.973 5.408-6.323 1-2.04 1.51-6.691 1.51-6.691s6.275 3.52 7.722 6.09c.575 1.02.479 3.87.479 3.87s5.927-5.094 6.702-8.168c.46-1.824-1.205-6.153-1.205-6.153s7.335 2.953 8.863 5.726c1.415 2.569.095 9.775.095 9.775s2.533-4.854 4.253-6.382c2.668-2.37 10.605-5.388 10.605-5.388l-2.717 10.419s4.8-1.436 6.6-.593c4.22 1.976 7.36 8.354 8.844 12.773.521 1.553.23 5.458.23 5.458s5.085-5.108 7.957-5.802c2.03-.492 6.88 1.077 6.88 1.077s-2.326 5.341-2.302 7.773c.048 4.672 4.94 10.172 4.725 14.839-.092 1.985-2.583 6.102-2.583 6.102s5.617 12.568 6.344 18.345c.826 6.555-2.945 14.355-.712 20.573.543 1.513 2.164 3.51 3.737 3.84 1.834.384 4.69-.972 4.69-.972s-1.09 4.79-2.583 6.102c-1.458 1.282-6.236 1.734-6.236 1.734s.312 4.023.064 6.517c-.248 2.494-2.062 7.788-.878 10.607 1.087 2.588 3.61 4.74 6.411 4.58.696-.04 2.494.486 3.332-.18 1.762-1.403 2.51-4.549 2.51-4.549s.51 4.763-.466 6.434c-1.318 2.26-3.095 3.566-5.47 4.666-2.413 1.118-8.699.507-10.312 2.622-2.756 3.614 1.303 10.862-.204 15.15-1.098 3.123-5.828 5.53-6.785 8.698-.812 2.687-.762 5.848.411 8.398.914 1.986 2.216 4.456 4.262 5.227 1.386.522 4.143.6 5.36-.245 1.506-1.044 2.644-3.065 3.262-4.79.49-1.37 1.275-4.68 1.275-4.68s1.8 5.001 1.45 7.276c-.294 1.919-1.46 4.218-2.91 5.508-2.067 1.837-5.533 3.563-8.24 4.132-3.004.631-7.334.53-10.22-.517-2.57-.931-7.276-5.478-7.276-5.478s-.813 4.079-1.441 5.74c-.9 2.376-1.757 6.142-3.89 7.523-1.932 1.251-7.659.427-7.659.427s.876 9.48 2.857 12.92c.867 1.506 2.732 3.102 4.265 3.921 1.707.913 4.362 1.855 6.269 1.524 2.353-.408 5.122-2.544 6.65-4.38.848-1.019 1.722-4.068 1.722-4.068s.097 7.5-1.575 10.055c-1.995 3.05-6.652 5.903-10.241 6.53-2.38.415-5.672-.74-7.856-1.773-1.495-.708-2.852-2.688-4.349-3.393-2.33-1.097-8.385-1.856-8.385-1.856s-.073 5.307-.631 7.493c-.618 2.417-2.242 5.377-3.36 7.607-.617 1.227-1.614 2.766-1.389 4.12.44 2.639 3.165 5.334 5.8 5.79 1.847.318 4.679-.838 5.79-2.347 1.338-1.816.632-7.493.632-7.493s2.989 6.31 2.378 9.049c-.408 1.83-2.344 3.926-4.005 4.795-2.348 1.23-6.164 1.08-8.8.79-2.1-.23-4.915-1.025-6.714-2.136-2.05-1.267-4.216-3.787-5.604-5.758-2.26-3.208-4.501-8.027-5.752-11.746-.6-1.783-2.589-4.996-2.589-4.996s-3.225-.663-5.133-1.094c-2.132-.481-5.066-1.588-6.548-3.195-1.513-1.641-2.093-4.785-2.71-6.931-.66-2.296-1.485-7.824-1.485-7.824s-8.946 4.06-10.936 7.505c-1.049 1.814-.96 4.908-.55 6.963.43 2.143 2.116 4.662 3.323 6.485.943 1.424 3.654 4.368 3.654 4.368s-7.25-.372-10.056-1.575c-3.702-1.587-9.306-6.565-11.685-9.815-2.166-2.96-3.643-7.227-4.456-10.804-.848-3.725.06-11.724.06-11.724l2.047-7.247s-4.044 2.979-4.974 5.162c-.818 1.923-1.077 6.88-1.077 6.88s-2.623-8.956-2.857-12.919c-.17-2.892-.056-6.897.963-9.609.759-2.018 4.17-5.854 4.17-5.854s-3.657-9.442-4.36-13.697c-.905-5.474-1.553-13.073-.357-18.491.943-4.27 6.39-13.098 6.39-13.098l-6.07.676s-5.659-7.823-5.752-11.746c-.122-5.144 4.154-11.333 6.804-15.743 1.335-2.221 4.017-4.552 5.395-6.746 1.785-2.842 4.834-10.088 4.834-10.088s-5.233-3.065-6.217-5.312c-1.104-2.52.35-9.163.35-9.163s3.345 3.727 5.242 4.617c1.455.683 4.269-1.1 4.269-1.1s-2.059-6.643-1.915-10.46c.079-2.113.9-5 2.136-6.715 1.196-1.66 5.51-4.017 5.51-4.017z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={3}
    />
    <path
      d="M175.269 82.095s-1.85 9.6-1.908 12.53c-.046 2.309 1.765 5.67 1.765 5.67s2.94-2.148 3.617-4.392c.862-2.857 2.256-12.664 2.256-12.664l-5.73-1.144zM206.221 86.872s-1.85 9.6-1.908 12.53c-.045 2.31 1.766 5.67 1.766 5.67s2.94-2.147 3.616-4.392c.862-2.856 2.257-12.664 2.257-12.664l-5.73-1.144z"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M187.808 46.536a12.505 7.36-14.767 1 1-24.184 6.374 12.505 7.36-14.767 1 1 24.184-6.374zM205.155 47.952a7.36 12.505-57.426 1 0 21.075 13.464 7.36 12.505-57.426 1 0-21.075-13.464z"
      style={{
        marker: 'none',
      }}
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
      overflow="visible"
    />
    <path
      d="M199.072 45.89s3.73 1.806 4.486 2.874c1.458 2.06 1.1 5.88 2.793 7.75.806.89 2.504 2.327 3.403 3.122.502.443 1.067 1.799 2.667 2.65 1.938 1.031 5.188.92 6.21 1.544 3.31 2.022 7.86 8.824 8.458 12.657.192 1.238-.89 2.805-1.508 3.893-1.565 2.755-4.849 5.618-6.51 8.316-.696 1.133-1.53 2.732-1.885 4.014-.255.925-.314 2.222-.319 3.182-.003.658-.08 1.588.197 2.185.529 1.139 2.366 1.425 2.824 2.595"
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M187.725 46.981s.688 1.746-.693 4.074c-1.105 1.863-4.178 4.352-5.223 4.734-3.347 1.223-7.917 1.816-10.488 2.433-2.616.627-5.356 1.643-5.757 1.804-1.043.42-2.773.051-3.675.72-2.122 1.572-4.058 5.133-4.132 7.773-.136 4.843 6.762 9.817 6.77 14.661.01 5.683-7.077 11.6-7.88 17.225-.411 2.885 2.726 4.318 1.805 7.083-.563 1.694-4.615 6.725-4.615 6.725s7.163-2.787 9.524-4.984c1.449-1.348 3.47-5.61 3.47-5.61s-3.58 9.035-3.344 13.078c.256 4.42 3.244 10.365 3.244 10.365s.986-3.895 2.146-5.888c.82-1.407 5.158-1.53 5.158-1.53s-2.062 3.93-2.521 5.758c-.304 1.214-.593 2.936-.328 4.16.464 2.138 2.156 4.682 3.534 6.382.57.703 2.281 1.976 2.281 1.976s-.871-4.422-.323-6.203c.417-1.355 2.856-3.763 2.856-3.763s-.014 6.24.56 8.832c.288 1.301 1.038 3.02 1.243 4.338.488 3.143-.494 4.497-1.414 7.541-.387 1.28-2.382 4.87-2.382 4.87s6.393-2.072 8.182-4.295c1.198-1.49 1.97-4.512 2.341-6.389.248-1.256.27-1.33.27-1.33s1.778 2.814 1.934 4.19c.204 1.815-.169 2.174-.845 3.87-.923 2.319-2.503 3.737-2.919 6.197-.308 1.828.344 4.462 1.322 6.036 1.984 3.195 8.647 6.88 8.647 6.88s-1.961-5.813-1.922-8.397c.028-1.929 1.815-3.589 2.763-5.27 1.386-2.458 5.124-4.314 6.562-6.744 1.037-1.752 1.755-4.466 1.988-6.489.247-2.151.01-5.095-.491-7.201-.549-2.306-3.07-7.282-3.07-7.282s-.563-.532.933 1.176c1.15 1.313 4.378 4.753 4.764 5.87.666 1.924 1.105 6.285 1.105 6.285s2.729-4.6 3.252-7.222c.47-2.353-1.452-7.397-1.452-7.397l-.756-3.312s3.857 3.55 4.63 5.583c.904 2.375 1.264 7.758 1.264 7.758s4.468-5.823 4.659-8.773c.105-1.628-.218-3.566-.669-5.134-.428-1.49-2.523-5.081-2.523-5.081s4.078 1.566 4.863 2.93c.9 1.564 2.448 6.443 2.448 6.443s2.922-3.701 3.966-7.936c.809-3.283-.637-9.756-1.799-10.92l-7.708-7.71"
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M180.222 86.75s-1.633 13.792.671 20.032c1.32 3.573 7.096 11.444 7.096 11.444s9.178-6.553 11.645-9.492c4.24-5.05 5.849-19.503 5.849-19.503l-4.077-8.019L186 79.045l-5.778 7.705z"
      fill={props.tongueFill}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M169.988 70.506s-2.212 1.07-1.38 3.85c.595 1.986 4.593 5.057 4.901 6.428.316 1.403.39 5.245.39 5.245s4.323 1.997 5.995 1.804c2.167-.25 4.63-2.169 6.738-2.73 1.887-.504 6.448-.884 6.448-.884l1.41-13.03c-.172.144-5.466-7.48-7.102-10.377-.589-1.042-3.01.482-2.885 1.673.434 4.148 10.263 8.617 9.944 8.764 0 0 10.69-1.972 11.436-5.878.149-.78-.844-2.482-1.558-2.137-2.839 1.37-9.535 8.45-9.868 7.95l-1.41 13.03s4.442 1.838 5.881 2.75c1.457.923 2.847 3.553 4.412 4.278 2.233 1.033 8.481-.503 8.481-.503s.143-3.137.673-4.239c.814-1.695 4.805-3.462 6.389-5.55 1.43-1.887-.224-3.551-.224-3.551"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M157.185 27.896s2.481 2.814 2.401 4.286c-.09 1.664-3.34 2.861-3.222 4.523.095 1.355 3.266 1.932 3.117 3.282-.334 3.028-8.43 5.663-8.43 5.663s5.095-8.012 6.055-11.901c.421-1.705.08-5.853.08-5.853zM237.095 38.324s-2.652 7.66-1.077 10.788c1.14 2.266 2.763 6.257 2.763 6.257s-1.943-.294-2.553-.819c-1.499-1.29-1.373-2.725-1.998-4.982-.436-1.575-1.57-4.38-1.531-6.632.033-1.912 4.396-4.612 4.396-4.612z"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M186.951 48.978A8.007 8.007 0 1 1 171.13 46.5a8.007 8.007 0 1 1 15.821 2.478zM220.742 52.772a8.007 8.007 0 1 1-15.822-2.478 8.007 8.007 0 1 1 15.822 2.478z"
      style={{
        marker: 'none',
      }}
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
      overflow="visible"
    />
    <path
      d="M214.547 44.829c-.596-.095-1.145-.086-1.69-.107-1.092-.042-2.025 0-2.025 0l.245 3.485s.76-.03 1.644.005c.884.034 1.95.35 1.795.25-.07-.046.507.847.534 1.032.086.592-.346 2.685-.719 3.213-.13.185-1.049.768-1.102.776.27-.044-.594-.103-1.215-.317-.621-.213-1.135-.43-1.135-.43s-1.717-.483-2.054.05c-.448.707.602 2.723.602 2.723s.662.27 1.464.545c.802.276 1.602.666 2.902.455 1.55-.252 2.605-1.045 3.41-2.186 1.083-1.531 1.586-3.428 1.31-5.33-.196-1.352-.713-2.565-2.083-3.458a4.7 4.7 0 0 0-1.883-.706z"
      fillRule="evenodd"
    />
    <path
      d="M213.945 39.3s-2.795-.001-3.993.273c-2.352.539-4.898 2.194-5.555 4.516-.343 1.214-.029 2.34.733 3.346.819 1.082 2.388 1.21 3.718 1.48 1.947.396 4.622-.767 6.5-.238 2.705.76 6.014 3.01 7.808 5.173.838 1.011.723 3.159 1.701 4.036.88.79 2.648 1.491 3.773 1.13 1.156-.371 1.996-2.087 2.476-3.203.232-.537.378-1.347.302-1.927-.115-.878-.686-1.974-1.192-2.7-.633-.91-2.65-2.57-2.65-2.57"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M180.752 40.672c-.596-.095-1.145-.086-1.69-.107-1.092-.042-2.025 0-2.025 0l.244 3.485s.76-.03 1.645.005c.884.034 1.95.35 1.795.25-.07-.046.507.847.534 1.032.086.592-.346 2.686-.719 3.213-.13.185-1.049.768-1.102.776.27-.044-.595-.103-1.215-.317-.621-.213-1.135-.43-1.135-.43s-1.717-.483-2.055.05c-.447.707.603 2.723.603 2.723s.662.27 1.464.545c.802.276 1.602.666 2.902.455 1.55-.252 2.605-1.045 3.41-2.186 1.083-1.531 1.586-3.428 1.31-5.33-.196-1.351-.713-2.565-2.083-3.458a4.7 4.7 0 0 0-1.883-.706z"
      fillRule="evenodd"
    />
    <path
      d="M164.766 39.974s-3.046 4.443-3.902 6.57c-.538 1.336-1.414 3.272-1.092 4.676.337 1.469 1.652 3.87 3.159 3.906.885.02 1.444-1.487 1.961-2.206 1.131-1.573 1.755-4.325 3.211-5.601 1.778-1.558 4.934-2.81 7.29-2.988 2.556-.192 5.758 1.71 8.302 2.02 1.39.168 3.334.444 4.666.012 1.288-.418 3.648-2.66 3.648-2.66s-.674-3.045-1.526-4.01c-1.08-1.223-3.24-2.094-4.807-2.548-1.949-.564-4.714-.45-6.742-.517-.97-.033-3.236.031-3.236.031"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M134.395 79.035s3.814 1.385 5.48 1.164c3.446-.455 7.877-2.797 10.317-5.272.534-.541 1.122-2.273 1.122-2.273M123.544 123.868s.003-7.25 1.12-10.08c.999-2.53 3.325-5.534 5.424-7.263 4.255-3.504 16.555-7.968 16.555-7.968M145.65 108.81s-9.071 5.447-12.223 8.647c-1.552 1.576-4.167 6.082-4.167 6.082M143.635 126.556s-5.049 4.918-6.816 7.352c-2.158 2.973-4.577 7.295-5.962 10.699-1.255 3.086-2.474 7.415-2.904 10.72-.474 3.645-.243 13.278-.243 13.278M131.382 184.687s6.135-4.393 6.892-9.017c.551-3.37-2.903-8.535-2.998-11.948-.094-3.38 1.93-9.002 3.925-11.733.753-1.03 3.507-2.406 3.507-2.406M158.92 201.512s5.54-4.991 5.94-7.939c.866-6.386-5.047-13.307-3.043-19.432.407-1.243 2.84-3.13 3.68-5.438.615-1.689.45-4.877.308-5.59-.414-2.078-5.213-4.468-5.213-4.468M148.235 224.95s-5.26-6.117-7.156-9.696c-1.74-3.285-2.655-6.767-2.526-8.476.238-3.156.643-5.58 1.735-8.55 2.198-5.983 9.507-11.728 11.406-17.812.56-1.793-.427-4.648.58-6.232.894-1.404 3.7-1.545 4.787-2.806 1.02-1.184 1.885-3.271 1.943-4.833.038-1.047-1.06-3.327-1.06-3.327M152.239 144.147s-2.943 3.835-3.667 5.748c-.704 1.863-1.641 4.663-1.027 6.557.672 2.072 4.448 3.077 5.12 5.149.65 2.005.136 5.225-1.087 6.942-1.02 1.43-5.172 2.746-5.172 2.746s-.94-7.845-.237-11.101c.259-1.195 1.762-3.676 1.762-3.676M194.895 174.539s2.219 7.96 1.11 11.205c-.812 2.38-4.707 4.226-5.004 6.723-.13 1.097 1.445 3.388 1.445 3.388s-2.946.768-3.978.167c-1.376-.802-2.106-3.164-2.42-4.726-.58-2.88 1.186-5.81.043-8.515-.531-1.258-4.119-3.944-4.119-3.944s1.948 14.453-.275 19.019c-1.437 2.952-7.003 1.207-8.605 4.879-.948 2.17-1.296 5.88-.052 7.895 1.031 1.67 3.774 2.785 5.639 2.172 1.759-.579 3.603-2.82 3.603-2.82s.449 4.892-.833 6.415c-1.04 1.235-4.329 3.393-4.329 3.393M198.433 200.894s-2.05 3.447-2.048 5.095c.005 3.6 4.507 11.121 4.507 11.121M210.839 196.171l-.417-7.981 1.162-12.733M219.14 159.142s-2.983 6.313-2.686 9.162c.53 5.084 8.064 15.012 8.064 15.012M234.034 125.23s-.708 6.103.353 8.387c1.5 3.23 10.087 7.413 10.087 7.413M224.588 134.998s7.796 11.325 9.436 16.893c1.607 5.46 1.2 18.936 1.2 18.936"
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
    />
    <path
      d="M191.823 84.81c-3.015 16.298-3.372 22.53-3.372 22.53l.53 3.5 1.789-3.358s.357-6.02 3.359-22.248l-2.306-.425z"
      fillRule="evenodd"
    />
  </g>
);

export default SvgGuardantLionHead;