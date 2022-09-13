import React from "react";
import DashboardItems from "../../components/DashboardItems";
import liliesIcon from "../../images/liliesIcon.svg";
import "./dashboard.css";

const Dashboard = () => {
  let getDate;

  const day = new Date();
  const hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    getDate = "Good Morning";
  } else if (hr >= 12 && hr <= 17) {
    getDate = "Good Afternoon";
  } else {
    getDate = "Good Evening";
  }

  return (
    <div className="dashboard flex">
      <aside className="md:w-80" aria-label="Sidebar">
        <div className="dashboard-sidebar h-screen overflow-y-auto py-4 px-4 bg-gray-50 rounded">
          <section className="flex items-center justify-center py-20">
            <img className="md:mr-3 h-6 sm:h-14" src={liliesIcon} alt="liles" />
            <span className="lilies-dashboard-icon self-center whitespace-nowrap">
              Lilies
            </span>
          </section>
          <ul className="space-y-5">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.698 2.79898C11.0605 2.48806 11.5223 2.31714 12 2.31714C12.4776 2.31714 12.9394 2.48806 13.302 2.79898L19.638 8.22898L22.125 10.219C22.2275 10.3011 22.3129 10.4025 22.3763 10.5176C22.4396 10.6327 22.4797 10.7591 22.4941 10.8897C22.5086 11.0202 22.4973 11.1524 22.4607 11.2785C22.4241 11.4047 22.363 11.5224 22.281 11.625C22.1989 11.7275 22.0974 11.8129 21.9823 11.8763C21.8672 11.9396 21.7408 11.9797 21.6103 11.9942C21.4797 12.0087 21.3476 11.9973 21.2214 11.9607C21.0952 11.9241 20.9775 11.8631 20.875 11.781L20 11.081V19C20 19.5304 19.7892 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H14V16C14 15.4696 13.7892 14.9608 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4695 14 10.9608 14.2107 10.5857 14.5858C10.2107 14.9608 9.99995 15.4696 9.99995 16V21H5.99995C5.46952 21 4.96081 20.7893 4.58574 20.4142C4.21067 20.0391 3.99995 19.5304 3.99995 19V11.08L3.12495 11.78C3.02309 11.867 2.90478 11.9326 2.77707 11.973C2.64935 12.0134 2.51482 12.0277 2.38146 12.0151C2.24811 12.0025 2.11865 11.9632 2.00076 11.8996C1.88287 11.836 1.77897 11.7493 1.69521 11.6448C1.61145 11.5403 1.54954 11.42 1.51316 11.2911C1.47679 11.1622 1.46668 11.0272 1.48345 10.8943C1.50022 10.7614 1.54351 10.6333 1.61076 10.5174C1.67802 10.4016 1.76786 10.3004 1.87495 10.22L4.36195 8.22998L10.698 2.79898Z"
                    fill="black"
                  />
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.20001 19.332C4.1894 18.397 3.38335 17.2628 2.83262 16.0009C2.28188 14.7391 1.9984 13.3768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22.0016 13.3768 21.7181 14.7391 21.1674 16.0009C20.6167 17.2628 19.8106 18.397 18.8 19.332C18.5627 18.3683 18.1235 17.4659 17.5116 16.6844C16.8996 15.903 16.1288 15.2604 15.25 14.799C16.0265 14.1345 16.5806 13.2481 16.8379 12.2591C17.0952 11.27 17.0433 10.2259 16.6891 9.26728C16.3349 8.30867 15.6955 7.4816 14.8569 6.89747C14.0184 6.31334 13.021 6.00018 11.999 6.00018C10.9771 6.00018 9.97964 6.31334 9.14108 6.89747C8.30252 7.4816 7.6631 8.30867 7.30891 9.26728C6.95472 10.2259 6.90277 11.27 7.16008 12.2591C7.41738 13.2481 7.97156 14.1345 8.74801 14.799C7.86961 15.2606 7.09916 15.9033 6.48755 16.6848C5.87594 17.4662 5.4371 18.3684 5.20001 19.332ZM7.01001 20.668C8.52718 21.5433 10.2485 22.0028 12 22C13.817 22 15.52 21.515 16.99 20.668C16.9096 19.3992 16.3489 18.2086 15.422 17.3385C14.495 16.4684 13.2714 15.9841 12 15.9841C10.7286 15.9841 9.50502 16.4684 8.57804 17.3385C7.65107 18.2086 7.09037 19.3992 7.01001 20.668ZM12 8C11.606 8 11.2159 8.0776 10.852 8.22836C10.488 8.37913 10.1573 8.6001 9.87869 8.87868C9.60011 9.15726 9.37913 9.48797 9.22837 9.85195C9.0776 10.2159 9.00001 10.606 9.00001 11C9.00001 11.394 9.0776 11.7841 9.22837 12.1481C9.37913 12.512 9.60011 12.8427 9.87869 13.1213C10.1573 13.3999 10.488 13.6209 10.852 13.7716C11.2159 13.9224 11.606 14 12 14C12.7957 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7957 8 12 8Z"
                    fill="#BCBCBC"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Your Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 2C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V4H15V3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V8H3V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2ZM3 10V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V10H3Z"
                    fill="#BCBCBC"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-black-600 bg-green-500 rounded">
                  6
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 8.88705e-08 2.20435 8.88705e-08 3V18.138C-9.03486e-05 18.4008 0.0688447 18.6589 0.199905 18.8867C0.330964 19.1144 0.51955 19.3037 0.746783 19.4357C0.974015 19.5676 1.23192 19.6376 1.49468 19.6385C1.75744 19.6394 2.01584 19.5713 2.244 19.441L7.504 16.435C7.65506 16.3487 7.82603 16.3033 8 16.3033C8.17397 16.3033 8.34494 16.3487 8.496 16.435L13.756 19.441C13.9842 19.5713 14.2426 19.6394 14.5053 19.6385C14.7681 19.6376 15.026 19.5676 15.2532 19.4357C15.4804 19.3037 15.669 19.1144 15.8001 18.8867C15.9312 18.6589 16.0001 18.4008 16 18.138V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H3Z"
                    fill="#BCBCBC"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Your Cart</span>
                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-black-600 bg-orange-300 rounded">
                  6
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <section className="dashboard-main md:pt-20 px-4 sm:px-16 w-full h-screen overflow-y-auto pb-9">
        <article className="flex justify-between items-center pt-8 pb-20">
          <div className="profile-container">
            <h4>{getDate}, Oghenevwede!</h4>
            <p>What delicious meal are you craving today?</p>
          </div>
          {/* <img className="w-10 h-10 rounded-full" src={""} alt="img" /> */}
          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full">
            <svg
              class="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </article>

        <article className="dishes-item flex flex-wrap gap-y-16 gap-x-8 px-3 w-full justify-center md:justify-between">
          <DashboardItems />
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
