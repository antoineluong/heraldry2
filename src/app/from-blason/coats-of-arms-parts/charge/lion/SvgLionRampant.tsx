import React from 'react';
import { Dimension } from '../../../../model/dimension';

// Thanks to https://en.wikipedia.org/wiki/File:Lion_Rampant.svg

const SvgLionRampant = (props: {
  dimension: Dimension;
  head: React.ReactNode;
  stroke: string;
  mainFill: string;
  clawFill: string;
  onClick: () => void;
}) => {
  const onClick = props.onClick;
  return (
    <svg width={props.dimension.width} height={props.dimension.height} viewBox="0 0 400 420">
      <g stroke={props.stroke}>
        <path
          d="M128.244 283.892s-11.32-8.663-11.19-13.377c.04-1.465 1.727-2.045 2.28-3.402.653-1.607.898-3.302-.159-4.679-1.674-2.182-6.034-1.633-8.716-1.026-3.581.811-9.594 6.34-9.594 6.34l-1.402 9.079 12.699 11.463 16.082-4.398z"
          fill={props.mainFill}
          fillRule="evenodd"
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M259.518 308.708s-37.637-6.305-53.901-5.953c-3.882.084-9.393.097-12.79 1.976-2.979 1.647-5.92 5.523-7.425 8.575-1.669 3.384-4.133 8.904-2.53 12.32 1.465 3.121 10.135 5.415 10.135 5.415s-8.254 2.566-11.65 1.61c-2.507-.707-5.29-3.325-6.717-5.503-1.073-1.638-1.776-6.278-1.776-6.278s-3.28 3.237-5.311 3.665c-2.704.57-8.577-.518-8.577-.518s2.595-2.294 3.569-3.289c1.658-1.693 3.222-4.06 3.792-6.36.345-1.391-1.225-4.617-1.225-4.617s-.768 2.83-1.386 3.911c-1.322 2.308-3.556 5.22-5.707 6.783-1.212.882-3.662.735-4.629 1.881-1.294 1.535-2.224 2.246-1.767 4.2.35 1.498.865 3.443 2.304 3.982.94.352 3.048 1.302 3.942.845.743-.38 2.589-1.018 2.589-1.018s-1.102 2.91-3.096 4.623c-1.083.931-2.897 1.023-3.87 1.215-.504.1-2.459.826-4.451-.37-1.938-1.165-3.56-3.263-3.833-3.68 0 0-2.826-3.305-3.315-5.05-.75-2.673-.423-6.574.315-9.251.412-1.493 2.15-3.01 2.493-4.52.284-1.25-.595-3.034-.247-4.27.385-1.366.32-1.302.32-1.302s.729 1.088-.519 3.103c-1.382 2.233-5.235 7.94-5.235 7.94l-3.555-5.168-.477-5.228s-.195-1.76.331-2.142c.563-.409 1.656.659 2.29.371 1.568-.71 1.387-3.911 1.387-3.911s-.02 3.15-1.616 3.864c-.581.26-1.63-.706-2.105-.282-1.719 1.533-.505 4.104.145 7.676.473 2.597 1.74 5.175.939 6.74-.724 1.411-4.642 2.536-4.642 2.536l-11.734-4.159s-3.52-3.38-3.837-5.322c-.511-3.136 1.362-11.294 1.362-11.294l-.817-.18-5.013 4.827s.185 7.25-2.13 8.491c-1.645.883-5.866-2.08-5.866-2.08l-10.645-9.716s-.614-3.844.1-5.248c1.079-2.124 6.324-4.803 6.324-4.803l-5.198-2.723s-6.515 3.359-9.234 2.45c-1.327-.442-2.32-2.383-2.884-3.663-1.09-2.473-1.473-8.887-1.473-8.887l9.804-15.237s3.715-.447 4.914.421c2.533 1.835 4.084 9.593 4.084 9.593s9.473 5.368 14 5.842c4.798.503 10.991-2.651 15.805-2.982 3.242-.223 7.668-.263 10.818.532 1.153.291 2.653.96 3.577 1.708 1.96 1.586 3.905 4.453 5.125 6.66 1.176 2.127 1.406 5.615 2.81 7.6.727 1.028 3.23 2.685 3.23 2.685s-4.638-7.33-6.362-10.62c-2.125-4.055-3.544-10.244-6.3-13.9-.842-1.117-3.001-1.735-3.552-3.02-1.048-2.444-.614-6.433.495-8.85.174-.38.995-.548 1.002-.966.03-1.53-2.82-2.324-3.54-3.676-1.615-3.034-2.598-7.769-2.413-11.202.16-2.984.973-7.389 3.132-9.456 1.709-1.637 5.221-2.164 7.587-2.154 3.367.015 10.769 3.157 10.769 3.157s-5.64.81-7.588 2.154c-1.393.961-3.083 2.86-3.366 4.53-.157.92.466 2.159.928 2.97 1.998 3.51 8.998 10.014 8.998 10.014s8.463-2.347 12.192-2.723c4.7-.473 11.077-.434 15.744.297 2.525.396 5.791 1.487 8.157 2.451 2.853 1.164 6.03 4.49 9.098 4.766 1.86.167 4.218-1.137 5.941-1.857 1.87-.78 4.53-1.739 5.966-3.168 1.301-1.295 54.113-18.6 39-28.845l-31.514-21.365 48.256 29.806 22.151 33.277-30.102 39.344z"
          fill={props.mainFill}
          fillRule="evenodd"
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M140.477 259.65s3.212 1.788 4.715 2.222c1.378.398 4.745.581 4.745.581M155.067 268.783s-2.824-1.916-4.226-2.048c-1.582-.149-3.879.378-5.111 1.38-1.315 1.068-2.556 5.036-2.556 5.036M155.976 272.737s-3.326-.982-4.585-.415c-1.866.842-3.213 3.628-4.04 5.5-.445 1.007-.724 3.596-.724 3.596M159.645 278.219s-3.854-.18-5.26.557c-1.299.682-2.577 2.377-3.186 3.712-.803 1.76-.94 6.38-.94 6.38M116.55 302.009s3.133-2.447 4.324-3.199c1.623-1.024 6.398-.043 6.398-.043M101.13 293.352s1.903-1.982 2.995-2.24c1.504-.354 5.067.916 5.067.916"
          fill="none"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M103.718 267.916c-1.486-1.26-2.077-4.108-3.415-5.525-2.017-2.135-8.023-5.611-8.023-5.611s5.129-.714 7.287-.348c2.612.444 6.295 1.456 8.188 3.31 1.454 1.424 2.84 4.209 2.672 6.238-.108 1.319-1.113 3.318-2.375 3.716-1.34.424-3.262-.87-4.334-1.78zM88.473 271.883c1.064 1.037 2.063 2.865 2.46 4.312.404 1.479.935 3.815.103 5.163-.53.859-2.027 1.341-3.013 1.485-.705.102-1.665-.136-2.303-.414-1.347-.587-2.458-2.563-3.887-2.938-1.25-.327-3.118.038-4.346.542-1.737.712-2.664.897-3.892 2.33-.94 1.098-2.858 5.384-2.858 5.384s-1.8-5.101-1.604-7.16c.286-3.008 1.493-5.88 3.805-7.915 1.461-1.285 4.107-2.054 6.002-2.338 2.338-.351 5.551-.044 7.78.606.576.169 1.327.527 1.753.943zM98.433 302.976c.863-.07 2.073.432 2.692 1.037 1.528 1.493 3.15 4.493 2.71 6.584-.332 1.586-2.513 2.894-3.891 3.747-2.05 1.268-5.175 2.424-7.57 2.692-2.215.248-7.379-.879-7.379-.879s4.462-2.75 5.877-4.45c1.313-1.575 1.67-4.61 3.074-6.104 1.067-1.138 2.932-2.501 4.487-2.627zM126.656 316.204c1.913-.32 4.264 1.921 5.482 3.432 1.042 1.294 1.292 2.557 1.153 4.212-.183 2.176-1.862 4.983-3.571 6.342-1.062.845-2.982 1.252-4.339 1.274-1.596.027-3.009.395-4.43-.33-1.641-.837-4.734-3.91-4.734-3.91s4.02-.038 5.44-.884c1.544-.918 3.198-3.002 3.664-4.737.252-.94-.694-2.277-.432-3.213.227-.812.935-2.046 1.767-2.186z"
          fill={props.clawFill}
          fillRule="evenodd"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <g stroke={props.stroke}>
        <path
          d="M87.586 54.786s2.57-12.03 6.48-14.98c1.189-.898 3.016.165 4.925-.647 2.053-.873 6.659-2.48 7.047-4.677.398-2.248-2.948-7.015-2.948-7.015s-7.097-4.997-10.64-5.154c-3.86-.172-12.043 4.563-12.043 4.563l-1.524 10.496 8.703 17.414z"
          fill={props.mainFill}
          fillRule="evenodd"
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M230.08 111.718s-25.236 61.735-73.23 64.669c-8.82.539-20.825-3.112-28.475-7.535-3.859-2.231-10.46-10.553-10.46-10.553s-7.057 4.377-8.113 7.524c-.776 2.311.428 5.772 1.416 8 1.068 2.413 5.385 6.956 5.385 6.956s-7.961-1.6-10.512-3.772c-2.691-2.292-4.656-6.937-5.695-10.315-.952-3.096-.813-6.13.517-9.082.969-2.152 4.085-6.612 4.085-6.612s-5.51-7.064-7.66-10.584c-1.885-3.085-5.118-10.91-5.118-10.91s-2.884.945-3.907 1.715c-.914.689-2.033 1.865-2.44 2.935-.578 1.526-1.144 4.124-.175 5.437 1.027 1.391 5.56 1.52 5.56 1.52s-1.84 2.742-3.11 2.997c-2.663.533-6.694-1.202-8.434-3.287-2.607-3.124-3.246-9.299-2.584-13.313.402-2.437 2.4-5.343 4.082-7.152 1.727-1.857 7.018-4.713 7.018-4.713s-4.366-4.006-5.323-6.284c-.705-1.68.088-4.344-.558-6.047-.836-2.207-4.329-4.008-4.65-6.346-.952-6.906 8.154-21.757 8.154-21.757S80.648 87.97 75.734 90.372c-2.212 1.08-8.186-.6-8.186-.6l-5.88-12.33s.14-4.517 1.518-5.561c3.244-2.457 13.561.103 13.561.103l-8.982-1.881-.93-10.078 7.08-4.041s-8.076 5.221-11.783 4.475c-2.11-.424-5.199-4.94-5.199-4.94l1.085-10.264s1.75-4.805 3.597-5.075c4.96-.722 13.148 10.305 13.148 10.305l-8.197-8.051 2.315-4.28 8.073 6.709-8.135-7.38-.01-7.452 2.687-.248s-5.17-.826-6.315-2.354c-1.341-1.788-2.057-4.458-1.047-6.453 1.562-3.085 10.112-5.45 10.112-5.45s8.008-1.06 10.243.861c1.898 1.632 2.733 4.03 2.635 6.532-.081 2.083-3.27 6.174-3.27 6.174s3.525 11.945 6.05 16.607c2.944 5.433 8.049 12.05 12.362 16.475 4.098 4.203 11.267 7.917 15.35 12.134 6.252 6.46 13.347 20.71 18.155 28.306 6.112 9.657 21.869 18.866 21.869 18.866l73.07-20.094-.63 10.331z"
          fill={props.mainFill}
          fillRule="evenodd"
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M104.926 151.921s3.59-4.154 4.89-5.884c1.058-1.409 2.567-3.252 3.945-4.349.834-.664 3.1-1.735 3.1-1.735M91.996 129.57s3.108-1.515 4.537-1.867c2.101-.517 5.24.289 7.183-.663 2.34-1.146 4.485-4.177 5.934-6.343.97-1.45 2.41-5.294 2.41-5.294M87.47 115.862s5.279-.45 7.349-2.512M87.433 86.645s4.275 15.61 10.103 19.864c4.113 3.002 12.792 3.805 12.792 3.805"
          fill="none"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M92.92 27.478c.276 1.518 1.353 3.526 2.595 4.443.949.7 2.71 1.27 3.829.895 1.5-.504 2.906-1.17 3.39-2.677 1.316-4.084 1.49-9.174-.27-13.086-1.334-2.961-4.569-6.516-7.581-7.728-1.387-.559-2.691-1.028-4.11-.557-1.427.473-4.78 2.314-4.78 2.314s3.375.877 4.532 1.766c1.294.994 2.602 2.874 3.215 4.386.77 1.903.021 3.433-.01 5.487-.023 1.447-1.07 3.333-.81 4.757zM54.902 15.825s.339-5.366 2.438-7.405c2.115-2.055 6.057-3.768 9-3.952 2.005-.126 4.796.72 6.419 1.904 3.103 2.263 5.814 5.65 6.795 9.362.411 1.557.81 3.514.148 4.981-.761 1.687-2.574 2.709-4.414 2.905-1.318.14-3.294-1.53-4.281-2.414-2.543-2.28-2.539-7.157-5.5-8.857-.922-.53-2.43-.676-3.49-.615-.95.055-2.127.634-3.039.905-1.367.407-4.076 3.186-4.076 3.186zM58.978 53.22c.937-.266 2.475-.4 3.01-1.215.77-1.172.534-3.43-.12-4.671-.923-1.754-1.863-3.186-3.775-3.71-1.08-.295-5.71 1.084-6.724 1.558-2.52 1.178-4.05 2.598-5.143 5.157-.995 2.33-1.135 6.105-.157 8.442.765 1.83 3.081 3.548 4.79 4.553 1.045.614 3.857 1.204 3.857 1.204s-2.19-4.847-1.895-7.004c.172-1.257 1.116-2.916 2.162-3.634 1.003-.687 2.825-.349 3.995-.68zM63.74 77.753c1.17-1.038 3.902.08 5.095 1.09 1.262 1.067 2.235 3.479 2.034 5.119-.226 1.837-2.119 3.898-3.595 5.014-2.075 1.569-5.562 3.11-8.158 2.938-2.761-.182-6.372-2.155-8.195-4.238-1.966-2.246-3.258-6.383-3.362-9.366-.045-1.298 1.177-4.167 1.177-4.167s1.575 4.172 2.99 5.343c1.962 1.624 5.505 2.666 8.052 2.69 1.335.013 3.265-3.804 3.962-4.423z"
          fill={props.clawFill}
          fillRule="evenodd"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <g fillRule="evenodd" stroke={props.stroke}>
        <path
          d="M45.307 165.29c1.299-.175 3.154.012 4.326.598.93.466 1.95 1.546 2.44 2.465 1.309 2.457.725 6.543 1.83 9.098 1.796 4.157 8.739 12.308 8.739 12.308l-17.392 1.283-13.792-11.611 1.69-6.268s2.905-3.505 4.496-4.594c2.064-1.413 5.185-2.947 7.663-3.28z"
          fill={props.mainFill}
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path d="M45.307 165.433h0z" fill="#f8c300" />
        <path
          d="M203.576 140.534L136.3 150.897l-69.963 27.67-19.62 8.168-5.203-3.506s-3.64-7.358-6.48-9.17c-1.9-1.21-7.39-1.342-7.39-1.342l-6.17 15.632s.64 3.977 1.715 5.23c1.14 1.328 5.208 2.636 5.208 2.636l5.666-2.147c.698-.69 16.32 1.05 18.983 2.555.643.364 2.05-1.057 1.749-1.731-.33-.735-2.838.32-4.92.254-2.716-.087-4.214.729-5.448.595-4.731-.515-4.841.039-8.208 2.254-1.463.962-2.637 5.207-2.637 5.207l12.104 15.724s6.824 1.962 9.134.48c2.714-1.74 2.188-7.297 3.966-9.986 1.323-2.002 3.736-7.03 5.684-5.628 1.85 1.332-3.963 2.323-5.975 5.441-2.472 3.83-1.498 9.75-1.498 9.75l5.19 6.117s11.362 1.107 15.667-.792c.676-.298 1.646-1 1.75-1.731.215-1.529 1.994-5.986.712-7.918-1.582-2.384-4.625-3.81-4.625-3.81s-.752.27.225.087c2.177-.408 4.597 3.814 4.597 3.814l10.48-7.78s.593 2.616.367 3.712c-.382 1.862-3.06 5.549-3.06 5.549s6.441-.754 9.733-2.524c2.439-1.31 7.09-4.22 8.34-6.69.834-1.646 2.05-3.171 2.05-3.171s.4 5.65-.771 8.835c-.704 1.914-3.403 4.58-3.403 4.58s3.708.211 6.884-.47c2.897-.62 5.246-2.121 6.012-2.433.15-.06 3.781-1.811 6.27-6.064 2.346-4.012 1.1-3.865 3.889-5.285.716-.364.91 3.12.055 6.705-.757 3.178-2.54 6.48-2.506 6.575 3.518-.424 13.909-3.32 18.145-6.211 7.106-4.848 10.057-15.793 11.484-15.132 6.176 2.862 22.098 3.269 27.048 7.942 4.756 4.492 16.692-3.071 22.667-.407 9.575 4.27 24.912-43.696 24.912-43.696l-10.74-18.177-14.793-.074z"
          fill={props.mainFill}
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M47.687 170.804c.207-2.866-.997-5.86-3.088-7.83-1.798-1.696-5.346-2.368-7.802-2.645-2.539-.286-6.234-.364-8.472.87-1.17.644-1.867 1.436-2.228 2.723-.34 1.214-.54 3.906-.54 3.906s2.166-1.604 3.265-1.677c1.652-.11 3.762 1.03 5.2 1.85 1.497.851 2.994 2.693 4.411 3.669.995.684 2.328 1.716 3.508 1.971 1.265.274 3.205.323 4.3-.369.726-.458 1.384-1.612 1.446-2.468zM34.086 181.418c-.414 1.492-2.088 3.21-3.536 3.76-1.283.487-3.306.152-4.557-.414-1.612-.73-2.637-3.4-4.279-4.06-1.958-.786-4.987-.548-7.034-.035-1.34.336-3.066 1.223-4.049 2.194-1.268 1.255-2.892 5.196-2.892 5.196s-.997-7.58.313-10.42c1.043-2.26 3.932-4.44 6.15-5.57 1.995-1.015 5.065-1.555 7.303-1.526 2.085.027 4.933.602 6.766 1.597 1.749.95 3.823 2.847 4.796 4.583.705 1.257 1.404 3.306 1.019 4.695zM44.355 211.69c1.302-1.591 1.189-3.82.159-5.6-1.136-1.962-3.713-4.505-5.969-4.72-1.63-.154-3.22 2.055-4.574 2.974-1.67 1.132-4.036 2.483-5.49 3.88-1.49 1.429-3.314 3.585-4.196 5.45-.531 1.123-1.178 2.816-.932 4.034.354 1.754 3.492 4.837 3.492 4.837s-.622-4.112.159-5.6c.7-1.337 2.651-2.42 4.053-2.976 2.27-.903 5.64-.906 8.081-1.002 1.954-.077 3.98.237 5.217-1.276zM72.306 222.903c.723 2.264 1.353 4.647.616 6.907-.805 2.47-3.725 5.167-6.153 6.092-1.535.585-3.209.937-4.822.627-1.7-.326-5.462-1.851-5.462-1.851s2.852-1.47 3.92-2.325c1.251-1.003 3.113-2.385 3.666-3.89.716-1.947-1.229-5.024-.356-6.906.54-1.162 2.127-2.439 3.4-2.588 1.356-.159 3.174.9 4.159 1.845.504.484.819 1.423 1.032 2.09z"
          fill={props.clawFill}
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <path
        d="M248.547 239.739c-4.387-1.058-10.614.088-14.999 1.157-2.383.582-7.524 3.196-7.524 3.196s5.756 3.149 8.333 4.264c5.108 2.21 12.75 3.298 17.464 6.255 4.176 2.62 8.64 7.67 11.72 11.519 3.503 4.377 9.858 15.876 9.858 15.876s1.58-21.542-3.08-28.918c-4.091-6.477-14.323-11.554-21.772-13.35zM253.609 371.892s-7.283-5.374-8.48-8.85c-.82-2.384 1.704-5.989.85-8.361-.82-2.282-3.46-4.89-5.753-5.679-1.719-.591-6.02.702-6.02.702l-4.988 11.446 3.593 4.611 7.32 6.571 13.478-.44z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={3}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M164.665 131.523s-29.725 59.46-24.592 63.93c4.932 4.297 33.235 11.696 39.311 14.12 9.739 3.882 30.642 15.705 40.515 19.23 7.426 2.653 17.486 8.544 24.296 12.52 7.52 4.39 18.423 10.41 22.832 17.917 2.73 4.65 4.142 12.53 2.8 17.75-2.03 7.9-11.761 14.263-17.25 20.295-.915 1.006-3.901.676-6.637 4.003-2.846 3.462-5.46 10.565-7.193 10.65-3.041.146-8.431-3.228-8.431-3.228s.447 3.98 2.777 6.87c1.856 2.302 5.54 3.649 6.56 3.639 2.541-.024 5.996-1.508 6.78-1.79 3.996-1.437 9.65-10.352 9.65-10.352s-10.495 11.565-10.694 17.79c-.087 2.742 2.264 4.952 1.806 7.658-.493 2.917-1.301 6.047-4.248 6.313-4.292.387-9.97-1.328-9.97-1.328s2.486 4.462 6.537 6.672c2.52 1.376 5.624 1.622 8.317.624 5.948-2.204 12.977-7.94 16.514-13.205 2.071-3.084 3.501-11.877 3.501-11.877s-6.365 13.194-4.996 18.895c.953 3.965 6.627 8.567 6.627 8.567s-7.155 2.473-10.516 4.63c-5.303 3.402-12.914 16.56-12.914 16.56s-8.11-3.086-11.068-5.27c-1.937-1.429-3.12-5.232-5.432-5.903-1.672-.486-5.607 1.503-5.607 1.503l-4.187 17.125s2.159 4.849 4.112 5.515c3.285 1.12 7.478-2.785 11.14-3.12 3.621-.332 10.99 1.036 10.99 1.036l-13.22 7.865-.686 5.249 10.352 9.649s6.827-.848 8.604-2.915c2.437-2.834 2.181-12.266 2.181-12.266s2.452 2.76 3.078 4.726c.781 2.45-.491 6.938-.491 6.938l4.95 4.614 10.047.953s4.368-2.935 4.615-4.95c.435-3.56-5.799-10.452-5.799-10.452l11.038-1.487 1.884-8.337s3.212 10.823 6.996 13.25c2.427 1.556 6.882 1.505 9.596.533 2.266-.812 5.904-5.432 5.904-5.432s-4.286 1.606-6.057 1.084c-1.593-.47-4.04-2.115-4.05-3.776-.018-3.143 7.582-7.232 7.582-7.232s6.577 3.726 9.718 4.012c2.244.205 5.774.05 7.346-1.564 1.68-1.724 1.464-7.888 1.464-7.888s-1.976 3.046-3.825 3.201c-1.876.158-5.367-.707-6.16-2.414-1.51-3.25 1.761-11.816 1.761-11.816s6.986 2.068 10.122.553c1.241-.6 3.41-3.003 3.685-5.17.413-3.255-.202-4.843-.202-4.843s-1.913 4.03-4.222 3.906c-2.332-.125-5.506-1.509-7.08-3.234-2.67-2.93-4.394-8.509-4.356-12.472.047-4.799 2.56-9.352 4.207-13.86.483-1.32 1.613-3.653 1.613-3.653s5.166 4.19 8.014 5.057c1.998.608 6.607-.184 8.318-1.382 2.556-1.79 4.681-6.625 3.897-9.646-.65-2.507-4.511-4.567-4.511-4.567s.34 4.046.058 5.83c-.2 1.265-3.488 2.038-4.722 2.383-1.008.281-2.335-1.03-2.93-1.891-2.943-4.253-2.811-10.985-2.213-16.122.425-3.653 5.27-11.069 5.27-11.069s7.658 6.145 11.58 7.43c2.864.938 4.228-4.033 2.748-8.456-1.804-5.391-6.899-10.554-6.899-10.554s-14.807-13.923-17.84-18.251c-8.228-11.74-10.93-22.5-20.166-33.464-3.57-4.238-9.685-10.935-13.637-14.818-6.715-6.6-18.141-15.87-24.374-22.928-10.546-11.942-34.334-39.155-34.334-39.155l-11.462-17.73-48.722-1.178z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={3}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M328.082 291.364s-2.8-6.796-4.736-9.775c-1.709-2.63-5.906-4.52-7.648-7.129-1.46-2.187-3.063-8.214-3.063-8.214M303.517 276.507s4.137 5.559 4.688 8.389c.832 4.272-2.437 9.422-2.474 13.774-.023 2.85.8 6.044.34 8.305-.392 1.929-2.3 6.145-2.3 6.145s4.527-2.241 6.164-4.104c.632-.72 4.715-5.159 4.715-5.159s-1.434 10.383-.181 14.57c.375 1.254 2.439 3.614 2.439 3.614M305.054 349.355s1.44 5.057 2.596 6.964c.98 1.618 4.215 4.687 4.215 4.687M299.574 379.337s2.597-5.335 2.992-7.814c.438-2.746.364-6.602-.456-9.26-.305-.989-1.802-2.942-1.802-2.942M291.382 361.856s2.688 5.352 2.498 7.882c-.28 3.736-3.17 8.161-4.16 11.775-.498 1.823-1.324 4.295-1.22 6.183.082 1.462 1.47 4.652 1.47 4.652M282.097 380.213s1.698-9.212 1.955-11.305c.214-1.754-.706-5.202-.706-5.202"
        fill="none"
        stroke={props.stroke}
        strokeWidth={2.5}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <g fill="none" stroke={props.stroke} strokeWidth={2.5}>
        <path
          d="M245.44 181.287l-6.827 9.915M250.147 186.134l-5.927 7.34M253.618 191.316l-3.14 5.689M257.372 195.433l-3.365 5.395"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <path
        d="M285.408 347.702l-5.805 1.282-9.024-1.517s-.412 2.121-.03 3.48c.246.868 1.316 2.349 2.138 2.722 1.532.697 3.822 1.42 5.486 1.169.832-.127 2.447-1.372 2.447-1.372M279.077 315.617s-3.586 5.392-3.765 8.052c-.167 2.484 1.264 5.747 2.478 7.92 1.043 1.868 2.134 3.533 4.113 4.344 1.735.71 6.795.553 6.795.553s-4.364 2.756-6.496 2.956c-2.81.265-6.744-.741-9.142-2.23-1.565-.972-3.08-3.077-3.949-4.701-1.167-2.184-2.302-7.927-2.302-7.927M259.481 316.394s-4.18 4.874-4.662 7.555c-.376 2.094.664 4.912.423 7.025-.227 1.983-.727 4.046-1.554 5.862-.886 1.946-4.512 7.551-4.512 7.551M317.913 285.458s.555 6.878.006 9.752c-.588 3.081-3.861 9.719-3.861 9.719M209.243 207.894s4.449 3.838 5.863 5.634c.822 1.044 4.406 6.293 4.406 6.293M220.615 212.873s6.027 5.68 7.935 8.14c1.006 1.297 3.244 5.766 3.244 5.766M231.253 217.713s4.442 5.606 6.05 8.208c1.156 1.87 3.331 6.53 3.331 6.53s0 0 0 0M242.797 224.62s3.118 3.804 4.185 5.614c.997 1.69 2.292 4.038 2.699 5.957.395 1.866-.05 6.358-.05 6.358"
        fill="none"
        stroke={props.stroke}
        strokeWidth={2.5}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M237.671 353.587c-.062-2.014-2.449-4.16-4.093-5.324-1.934-1.372-2.941-1.783-5.286-2.14-2.046-.31-5.006-.728-6.897.113-2.017.897-5.018 5.384-5.018 5.384s6.53-1.087 9.228-.454c2.933.687 3.728 3.495 6.543 4.568 1.018.388 2.532 1.19 3.543.787.987-.393 2.013-1.872 1.98-2.934zM225.618 362.623c1.434 1.455 2.455 1.776 2.478 3.819.02 1.782-1.095 4.483-2.678 5.302-.952.493-2.494-.267-3.534-.527-1.751-.437-3.867-1.925-5.67-2.014-1.514-.075-3.598.446-4.905 1.214-1.047.616-2.148 1.912-2.76 2.962-.647 1.109-.354 2.42-.652 3.668-.093.387-2.3-2.151-2.864-3.675-.582-1.575-.766-3.967-.326-5.587.63-2.321 2.472-3.475 4.248-5.097 1.675-1.531 4.1-1.41 6.312-1.915 2.254-.515 5.473-.252 7.696.38.875.25 2.016.821 2.655 1.47zM235.368 391.836s3.704.974 5.015 1.908c.725.516 1.144.912 1.364 1.774.468 1.826.012 4.733-1.215 6.163-1.656 1.93-5.528 2.178-7.971 2.884-1.678.484-5.147 1.743-5.147 1.743s3.46-9.984 4.643-11.594c1.42-1.93 3.101-2.8 3.311-2.878zM269.885 399.608c1.205.554 2.58 1.928 3.105 3.146.65 1.505.84 3.955.192 5.461-.899 2.09-3.656 3.987-5.683 5.018-2.69 1.367-9.82 2.168-9.82 2.168s3.349-3.424 4.509-5.107c.714-1.036 1.832-2.46 1.952-3.714.147-1.527-1.822-3.402-1.474-4.896.226-.968 1.334-2.058 2.259-2.423 1.388-.547 3.605-.276 4.96.347z"
        fill={props.clawFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={2.5}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <path d="M331.568 293.36l-5.917-7.78" fill="none" stroke={props.stroke} strokeWidth={1.6} onClick={onClick} />
      <g fill={props.mainFill} stroke={props.stroke}>
        <path
          d="M337.848 282.17s3.739 3.295 8.209 3.219c3.88-.066 8.732-3.784 10.862-7.028 1.28-1.95 2.754-14.934 1.916-17.89-1.087-3.837-4.9-9.148-7.667-10.862-2.767-1.713-5.87-1.928-8.306-1.277-1.185.316-2.308 1.706-3.194 2.555-.669.64-1.977 1.4-2.029 2.325-.03.54.644 1.102 1.028 1.484 1.413 1.409 5.48 3.768 5.48 3.768s-5.064 2.448-7.307 2.056c-2.032-.355-4.651-2.163-5.595-3.997-1.223-2.376-.946-6.407 0-8.906.843-2.224 3.236-4.677 5.253-5.938 2.17-1.357 8.22-2.283 8.22-2.283s-9.296 1.25-13.13.342c-3.251-.77-7.334-3.02-9.82-5.252-1.266-1.136-2.804-3.027-3.197-4.682-.48-2.017-.093-5.038.913-6.85.992-1.788 3.268-3.851 5.253-4.34 1.937-.477 4.79.357 6.508 1.37 1.444.851 3.654 4.225 3.654 4.225s-3.29-.609-4.567-.114c-1.017.393-2.598 1.422-2.627 2.512-.042 1.599 2.307 3.02 3.654 3.882 1.552.992 5.824 1.941 5.824 1.941l7.193-.228 5.71.8s-6.725-14.369-9.537-19.803c-1.605-3.103-4.025-11.137-5.024-14.485-1.323-4.438-.99-4.937-2.453-9.331-1.687-5.063-4.702-11.97-8.678-15.53-2.3-2.057-7.374-4.277-10.351-5.088-2.501-.68-5.142-.526-7.69-.05-1.96.367-4.695 1.555-5.824 3.198-1.292 1.88-1.79 5.385-1.027 7.536.251.708 1.184 1.323 1.827 1.713 1.334.808 3.358 1.548 4.91 1.712 2.197.233 5.304.018 7.307-.913.55-.255 1.485-1.37 1.485-1.37s-1.38 5.34-2.969 6.965c-1.683 1.72-4.914 3.061-7.308 3.311-2.686.28-6.51-.496-8.792-1.94-2.93-1.855-6.156-5.794-7.08-9.136-1.065-3.857-.326-9.736 1.6-13.245 1.662-3.03 5.71-5.99 8.906-7.308 2.004-.826 7.193-.685 7.193-.685l3.083 1.028s-3.796-1.09-5.366-1.713c-1.695-.673-4.107-1.428-5.481-2.626-2.72-2.374-5.793-6.535-6.623-10.048-.531-2.25.145-5.47.913-7.65.967-2.744 2.864-6.41 5.139-8.222 2.296-1.829 6.315-3.075 9.249-3.197 1.801-.075 4.34.46 5.823 1.484 1.963 1.355 4.258 4.143 4.567 6.509.143 1.085-1.256 3.425-1.256 3.425s-2.534-3.255-4.11-3.882c-1.624-.646-4.233-.722-5.824 0-.994.451-1.964 1.738-2.397 2.74-.834 1.927-1.537 5.046-.686 6.966.934 2.104 4.102 3.55 6.166 4.567 2.014.992 7.194 2.055 7.194 2.055l7.536 5.595s-1.21-9.898-1.142-14.159c.06-3.653.571-8.537 1.37-12.103 1.07-4.767 3.135-11.012 5.253-15.415 3.118-6.483 9.98-13.638 12.903-20.21.996-2.24 1.936-5.439 2.17-7.88.294-3.078.175-7.341-.8-10.276-.626-1.885-2.334-4.017-3.54-5.595-1.325-1.734-2.903-4.51-4.91-5.367-1.386-.592-3.653-.39-5.024.115-1.37.504-2.916 1.842-3.654 2.968-.737 1.127-1.473 3.085-1.141 4.111.331 1.026 2.844 3.394 3.67 3.138.827-.255 6.72-1.54 6.72-1.54s-1.646 4.945-3.54 6.395c-1.892 1.45-7.187 1.707-10.723 1.26-3.535-.449-8.034-4.078-10.971-6.398-2.938-2.321-5.513-4.797-6.509-7.308-.996-2.511-.818-6.074-.228-8.222.59-2.147 1.976-4.37 3.54-5.595 1.194-.934 4.795-1.598 4.795-1.598s-5.619-2.211-7.536-3.882c-2.02-1.761-4.359-4.744-5.138-7.308-.887-2.918-1.058-7.398.228-10.163 1.791-3.85 5.382-8.378 9.027-10.557 2.54-1.518 7.883-3.82 10.841-3.877 2.09-.04 5.125 2.357 6.623 3.815 1.46 1.421 2.651 4.391 2.284 6.395-.277 1.505-3.312 3.882-3.312 3.882s.806-3.973 0-5.367c-.653-1.13-2.465-2.233-3.768-2.17-1.766.087-4.091 1.805-4.796 3.426-.523 1.204.031 3.142.571 4.34 1.308 2.898 6.966 7.992 6.966 7.992l11.875 3.426 7.65 5.024 2.17 3.083 3.882-9.02s7.322-7.422 11.304-9.25c2.15-.986 5.437-1.788 7.765-1.37 2.266.407 5.003 2.245 6.622 3.882 1.166 1.178 2.971 3.155 2.74 4.796-.259 1.847-4.452 4.339-4.452 4.339s.968-3.782.114-5.024c-.866-1.259-3.271-1.805-4.796-1.713-1.53.093-3.379 1.317-4.567 2.284-1.457 1.185-3.06 3.221-3.883 4.91-.894 1.838-1.696 4.58-1.598 6.622.145 3.041 2.224 6.749 3.311 9.592 1.579 4.13 4.734 9.275 5.71 13.588.483 2.14.6 5.128.342 7.308-.159 1.346-1.256 4.339-1.256 4.339s0 0 0 0l-2.591 5.147s6.6-6.12 10.17-7.265c2.698-.864 6.905-1.256 9.444 0 3.112 1.54 5.763 5.966 7.022 9.202.583 1.496.853 3.766.485 5.328-.413 1.746-1.922 3.775-3.148 5.085-.854.912-3.39 2.421-3.39 2.421s2.311-5.382 1.937-7.749c-.321-2.03-1.794-4.89-3.633-5.811-2.346-1.176-6.533-.73-8.717.726-1.839 1.225-2.867 4.392-3.39 6.538-.603 2.47.71 6.034 0 8.476-.795 2.728-3.209 5.857-5.085 7.99-2.623 2.983-7.516 5.522-10.17 8.476-2.102 2.338-9.236 12.738-10.171 14.771-1.157 2.513-2.526 6.216-2.18 8.96.155 1.225 1.938 3.632 1.938 3.632s1.432-4.032 2.663-5.327c2.645-2.782 7.6-4.808 11.14-6.296 2.648-1.114 7.34-.475 9.201-2.664 1.565-1.84 1.926-5.774.969-7.99-.68-1.575-3.414-3.203-4.601-3.39-1.187-.188-2.18.726-2.18.726s2.97-3.763 4.844-4.117c2.415-.456 6.103.837 7.748 2.664 1.298 1.44 2.757 3.98 3.045 5.898.303 2.016-.35 5.285-1.107 7.178-.803 2.005-3.897 3.225-5.328 4.843-1 1.133-3.299 2.657-2.906 4.117.5 1.851 4.17 1.672 5.812 2.663 2.749 1.66 6.372 4.112 8.475 6.538 1.257 1.45 2.699 3.704 3.148 5.57.818 3.393.518 8.28-.484 11.623-.608 2.03-1.952 4.765-3.632 6.054-.84.644-2.335.897-3.39.969-2.05.14-5.069.168-6.78-.969-1.412-.937-2.906-4.843-2.906-4.843l-.727-1.695s4.972 3.027 7.265 2.664c1.277-.203 2.977-1.438 3.39-2.664.55-1.636-.24-4.34-1.453-5.57-1.535-1.556-4.87-1.561-7.023-1.937-1.748-.305-4.034-1.108-5.898-.45-2.213.781-5.267 1.671-7.264 2.905-1.488.92-3.11 2.65-4.359 3.875-.917.9-2.448 1.947-2.906 3.148-1.474 3.87-.632 12.076-.156 16.19.317 2.732 1.03 6.364 1.938 8.96 2.486 7.116 4.739 11.152 7.557 18.143 2.336 5.796 8.02 18.267 9.878 24.234.813 2.611 2.198 6.023 2.663 8.717.545 3.154.39 7.457.485 10.655.152 5.084 1.128 10.04-.156 14.961-.806 3.086-3.116 8.567-4.93 11.192-2.024 2.93-4.567 7.188-7.506 9.202-2.71 1.856-7.136 3.152-10.413 3.39-2.573.187-6.552-.157-8.956-1.093-3.624-1.41-11.138-6.902-11.138-6.902"
          fillRule="evenodd"
          strokeWidth={3}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M309.445 20.17s-2.388 7.986-1.92 10.765c.565 3.352 1.763 7.92 3.714 10.705 1.55 2.213 4.619 4.385 6.99 5.68 3.876 2.115 13.982 4.587 13.982 4.587"
          fill="none"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M324.565 58.898s-5.762 3.028-7.646 5.025c-1.35 1.43-2.884 3.752-3.277 5.68-.436 2.135.874 7.21.874 7.21M366.073 89.046s-4.891 9.907-7.864 13.545c-.999 1.222-2.678 2.538-3.933 3.496-1.243.948-4.369 2.84-4.369 2.84M360.393 119.413s-4.418-1.302-6.335-1.092c-1.549.169-3.552 1.041-4.806 1.966-1.162.856-3.059 3.714-3.059 3.714"
          fillRule="evenodd"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M387.046 169.004s-5.54-6.368-8.52-8.52c-3.029-2.188-7.85-4.355-11.579-4.588-4.188-.261-9.884 1.444-13.544 3.496-2.467 1.382-4.936 4.404-6.773 6.554-1.925 2.253-5.68 8.083-5.68 8.083"
          fill="none"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M349.907 232.577s3.949 4.965 5.025 6.991c.846 1.593 1.966 5.68 1.966 5.68"
          fillRule="evenodd"
          strokeWidth={2.5}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      {props.head}
    </svg>
  );
};
export default SvgLionRampant;
