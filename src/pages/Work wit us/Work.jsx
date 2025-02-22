import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Work = () => {
  return (
    <div className="mb-7">
      <section className="h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-radial from-green-100 via-blue-200 to-white">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold  text-black mb-2 md:mb-4 tracking-wide md:tracking-[5px]">
            WORK WITH US
          </h1>
          <p className="text-lg md:text-2xl text-black flex items-center justify-center font-mono">
            HOME{" "}
            <IoIosArrowForward className="mx-2 text-indigo-600 text-xl md:text-3xl" />
            <span className="text-indigo-600">WORK WITH US</span>
          </p>
        </div>
      </section>

      <div>
        <div className="container tracking-tight mx-auto p-4">
          <div className="w-full p-2">
            <h1 className="text-2xl font-bold text-center mb-4 text-black">
              We’re Looking For Top Talent Around The World
            </h1>
          </div>

          {/* Freelancer and Agency Sections */}
          <div className="flex flex-col mt-10 md:flex-row justify-between gap-6">
            {/* Freelancer Section */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center transition duration-500 transform hover:-translate-y-6">
              <img
                src="https://cdn.goodmanlantern.com/wp-content/uploads/2024/01/10-1.svg"
                alt="Step 2"
                className="mx-auto mb-4 h-40"
              />
              <h3 className="text-lg font-semibold text-gray-950">
                Freelancers
              </h3>
              <p className="text-gray-700 mt-2">
                If you’re a skilled freelancer, voice actor, translator, audio
                engineer, project manager, or creative writer, with a passion
                for bringing stories to life across cultures, we want to hear
                from you. Your talent could be just what we’re looking for!
              </p>
              <div className="p-4 mt-10 flex flex-col md:flex-row justify-center gap-6 lg:gap-60">
                <a
                  href="https://forms.gle/XRJXJuZbgWHDRTBU9"
                  className="bg-blue-500 hover:bg-blue-600 ransition duration-500 transform hover:-translate-y-4 text-white py-2 px-4 rounded-lg"
                >
                  Join as a Freelancer
                </a>
              </div>
            </div>

            {/* Agency Section */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center transition duration-500 transform hover:-translate-y-6">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUXGBgZFRUVFxkZGRcYGBIXFxYYGRgYHSggGBolGxUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS4tLS0vLS01LS0tLS0uLS0tLy0tLS4tLS0vLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMsA+QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABMEAACAQIDAwYJBQ4GAgMBAAABAgADEQQSIQUxQQYHIlFhcRMWMlOBkZKh0RQ1UrHBFRcjM0JUcnOEk7Kz0uJigsLh8PElokNjwzT/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADYRAAIBAgQCCAUDBAMBAAAAAAABAgMRBBIhMUFRBRMUYXGBkcEiobHR8CMy4UJSgvGSwtMz/9oADAMBAAIRAxEAPwDcYQhAAhCEACE4Ym1XqgQ3YVnkuIkTORrC5hXwgh4QRKELEZmLBxPUbwBhYnMOIRJanXFAYoydzsIQgSEJC8rdtjBYSricuYoAFUm2Z2YKoJ6rkTNcfyq27SVaz00CksSi0gwVVXMS9iSq2B1zcD2Q0W4Wb2NkhIvk5tZcXhqWIUWFRQSu/K25lvxswI9ElIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgATy7WnWa0RJkpCtnCbwhCMVhCEIAEIQgAQhCABEcViDTXNa+o0ihMa7R1pt6PrEAvY8ptpeKEd1j8Ism16R4kd4+EgUAJAJsOJ6opiqKrbK4e/VwhlQ2ZjPnLoHFYFqNAhnNSmbXtoGuTr1SA2tTx9bBCkvgqdY2WoRUPSQKc1jl6JJyi2uhbWWNhPM850n0jWoYjq4pWVmrq+/nz08jqYOjGdPNd66M981uCqUMAtCqMro9TS4OjVCwOnA3vLjKdSqlGzKbEf8t3S3U3uAesXm7o7pDtSkpK0lvyd/8AX8mfEYfqrWejPcIQnSM4QhCABCEIAEIQgAQhCABCEIAEITy+6ACTm5nIQjlQQhCBAQhCABCBM8b+6AHS0LH/AKnitUCKzWJCgkhRc6C+g4mUvaPLljcUaYXTfUNz6FGl9euJUqxhuaMPg6uI/wDmr23eyX53a9xdmsBc2AG8n4mQG1+VOGRWQMahtb8GLgH9Ld6jKLtHaNeqAarFs2qm5sLXuAqnKO24vI9KxBGXUg3AOovbeRumSeKd/hR2KPQ0Er1JX7lp89/kmXI7ew9gc5F+BVrj1CK09q0DuqL6dPrlHUWIJsdeP1W32itYkM2YLci+m4XsQVy6bvrixxU0tdS6fQ1Bv4W15p/Ve5cdoY/LTL08tQi3RDb9QDqIbOxjVFzMiL+i+f12Fh75SmW28bwCL9R3GK0axSxRmVtbkbraW3b+PumLG044lXypS5u7+jXuPR6M6pWU214fXf2L3qT2n6zLhSWwA6gPcJS+Q1Z6j1fCEOEC5WAFrktqCB1Dju7JeI/RWClQUpzd3L2v9Wzl9IStPq+XukzitednllgDwM69jn3PUIQgSEJy87AAhCEACEIQAIQhAAiVYxWI1DrJQstjzCEIxWEIQgAQJjXEbSooLvWpqOtnUfbKnt3l2mtPCDwtQ6B7dBe3Xyvq7Y8YSlsV1KsKa+JlvpV1csAwJQgMoOqkqGF+2xBkNys23XwqLUo4U4hdfCEPlyAbtArE99rC0oOAxeIwtT5RTY1Gb8erG4qXNz6dd/D1iX3ZHK3C1wPwgptxRyFN+oE6N6I9Si47aoqo4mM9Ho/z8+5D7C5ycNiGFMo9FyNM5XKT9HNcanhcSH5VYPwb500pOSwHBWIGb0G1x/tGfOdhMGtZC1AoKguMTRKsha+oemPWSDc33GQuCw1qlOlQPyhEoio7rmZKdRmYuLN5OiKuU2PR3amYMTDNG99judF11TrJW304+Wnjx+iuOCM18oIFu88Bfs1+uLUTlIIYjQ3yEgjeLHv+ozqFLrmB3nNa27hl7d+ndGONxqUhdt/ADee6c9Xbsj08moxbk7Li3+fmnMcuMq52KgdZYadpF7jvOk97D5TbOptnritUIOiLTXJ3m7At3Wt3yk7R2i9U66LwUbvT1mMrTbSw6WstzhYzpOVS8KWi57N/b5eWxoG1uUez2Oaia69SPTUqNb2U57gXJ0sd8jxt/Ds12LKCdcqXt3KSPrlPtC0d0IMzw6SxMI5b38Vd/nibFsTnG2bhqfg0TEnW7MaaXY9fl6DskgvO1gL+TiB301t6g/1TDbQtLUklZGKcpTk5S1bPqPYm2qGLpeFw9QOl7Ei4IPUQdQddxj5nHfMN5l8Y645qQPQqUmLLwzIVKnvF2Hpm2ER0iptnc53H0TsQxFdVW7mwuBc7gTuueGs90nBGhB7RJEs7XYpAGEIAKLU64pG86j2kNDqXMXhCEUcIQhAAjc744jcxkLIIQhJKwhCEAMYbZyDEYim6glKjW7s7W3dlvXJHA4QFlpoAuYgbus21jjlbh/BbRZvyayBh1ZgMp/g/9o3DkZSGKm/lA2IsrEWPeJvnVy0s75HKoYbrcQqK0vK3v9CabZ9BmqUqZqeEUMQWy5XK+ULDUdkrtXB021ZAe3d9U9bSpV6VCnjFxH4xipVWbNchiSevyTfvEKdS1MMT+QCT/lvM+GxSqycbPRJ62Oj0l0S8LSjVzRacpR0TWq8V5fjY75FbBo4k4ynUQGmVVBbeCWJup4MMoN5XKdfEbHxb4a6VabFTlJsXVr5WU/kNvBB00I6jNI5tsGUwnhDvquz+gdEfUT6ZnfOx86p+rofxtK8TacmntsGCThTjbTj6l68TQaxZmtSNmyr5V+K34L2/9yz4fCpTUIihVG4ARaESFKEP2ovxGLrYi3WSvb8v495zKOoQyjqERxOOp0yqu6qW3An/AJaJUNqUXbKtRS1yLX1uDbjv+2W5ZWvYy5o3tdXHeUdQhlHUJ2Egk5lHUIBR1CdgIAY7zbfPVb9p/mTazMQ5AV0p7XrVKjBEBxILOQq3NXQXOk2LC7Ww9Q5adem56ldSfUDK0na5fJq9rjirTDKVYAqwsVO433iUXaT1cDVtdmot5DX6QH0SeJHUd4l/IjPaeASvSalUGh48VPBh2iVVaedXW62NWDxPUztJXi917rvXz18VEbI26apUKVe/+Vh19ht3XljkHsjYNHD5VFi5BLOw6RylfJ+iASNO7fJyTSUkviIxcqTn+ktPS/l/C7whCEsMp6ptwi0bxZGuJDQ8XwPUIQijhG8cRuYyFkEIQklYQhPL7oAVLnD2YamHWug6dA5+9TbP6rK3cplSpVc6hlPr1tvBHvmtFQRYi43EHqmW8pNiPgahempbDMb/AKs/RPV2Hju3zRScZxdOXEyVc9CpHEU917cfuNMbRqVKVOjmQJTYstib3O+56olVoNUNLC0z06mVb9QG8ns0J7gYk21QbLTVmdtALceqw1J7pfeRPJtqANevrXcbt/g16v0jxtutaNGjTw95RWrVhquPxPSEY0ajWWLb0SWr3256+vcWXCYZaaJTQWVFCr3AWExbnY+dU/V0P42m4TD+dj51T9XQ/jaZGa4bmzwhCWlBUtv0/lOKWiikFLh2Ntxsb9wuYpj9geAUVqJLGmczBrWsutxu9XbJna+FdgrUbCorXVjod1iO2/UdIji8HiagRWqJluC4CEA2sQDqcwvw0E0KrK0UnouH1Mbw8c0pNXbd09F4enH1HuzcU1WmHZMhN+ib6WYgbwOAjmRu1NtU6DBWDEkX6IG65A3nsMW2XtJK4JQMLGxzW6uwyhxf7raGiMlfLe7HkBCAilhivI/BridqVsPWuad8QbA2IK1dCCNeMl+W/JRcIEqUmZkditnsSrWuNQBcEA+qR/IeotDatStVdUpk4gZr6BmqaKe3Q+qSfL7lMuJZaVI3pIb5reW9iLi/5IBI7bnsl1DrVK2tjNi1QcG1a/dvfv8AcmObrlKzE4au97C9J3Oum9CTv33HceyaBxnz5RpF2VBa7EKL7rk2HvM18cmK1FR8kxbrYD8HVtUQ6a24oD2QrwjGV72uTg6s5Qate3f9/uWFNSTrbQAG1tL3Ycdb21+j61JVxtbGUABiMHmRdPCYY3FgLfizqBJDZnKfC19KdZQ30H6Dd1m3+iUZJJX+mpq62Ldtn36fnlp3kxCEIo4T1TOs8wECUOITl52IWhEX3xaI1BrJQstjzCEIxWE8sJ6le5Z8qqez6aO6NUZ2yoikAmwuxudwA95EALDGOOx9CmctaqiZgdHZRmF7HRt4mW1ueOrc5cLTtm6OZ2vl6jYeVu1G7qMec5dc1GwtQqULUsxRt65iDlPaL2llOGaWVlVap1cHNdxdcFidnUmLUqmGRjvKugPrvoOwR793sL+c0P3ifGZNR5M1GUMK2HFwDY1QCLi9iLaGMdqbNagQGdHuL3puHA1tqRuMv6iLf7rmR4upFXyWRs/3ewv5zQ/eJ8Zj/OZVWrtJKlIiomSiM6dJbh2vqNNJFwkvCxfEVdISX9KNt+7uF/OKXtp8Z1duYY6DEUrnd01+MxGK4T8Yn6S/xCN2dcxO2v8AtNw2jjBSptUbhuHWeAlPXlJXAa7DU3zEDo8SBwt3y6YvCpVUo4up3j06EEag9syzalLNUp0FJAqVAt+Ni4UX9oH0Suiou90W4mU4tWfd5ncTts1XJtUqsBYlVvYXPVw1MfbA5RFGIQ6X6dNhY9R7jNBwGCSigp0lCqu4Dj2k8SeuVvlvsqmwSva1QHLmGhIKki9t5FveY6qxk8ttCuVCcFnUtUO9mcpVq1/BEBcwPgwT0iRrr6L+qWATNubzY1OszV6hYtSdcoBsCbXuTvO7dNJEqqxjGVkaKEpSheRiPI/ZqYnalehULZGOIbomxDLV0I9cvNPmyp5tcS5T6IQBvauR/wCsqXNv881v2nTr/CzZshPldhygnQjXeLZtfq3SmFWcVZM1VMPTm7yX55WKPtfkbhbp4MFUNlLhs3SBIJ6V7nTWeafJ7aWF1wmJFReFNjb0BXuo9BEtfKBL0b9TA/Z9s5sPGZ1ynylHrHD4RY15KTg3e+uupdUwdOdFVYLK07Nx0fc9N3w1XLTnBbP5X4lXFLF4QoxvZxdVYhb2Aa4PobgZJYgbPxhyVlp+EI8lug/oOhYdxIk3WQMMp1BvceiZvyrbBUkLYqhVZsxQVKJAI32zZjbeNNDDMusXC/LmRGnJ4eX9TT4/2vwXB8bcSynkriKH/wDFi3QeardNe4G3RHoJkbiOW1bC1DRxlBC4AOak+hvu6LXte3WD2So8lOU9dqvgcJiHU2JSliLMrBQWKgi9jlBNrLu3xLlItf5UWxiZXcqzBd2XRejYnSy23zVTipu0mn8n7HNr1HTinBOOvive3y8CyJznvm1wy5b7hUOb15bE+iXjYe2KWKpeFpE2vZlOjK3URGG3WwnyF/xfgchyBbb8vQy/4r2lX5pVbPiD+RlQHqzXa3ptf1iK1CUHKKtYeMqlOrGEpZr34JW9Pz0106nunqJ0d0UmRnRWwROqNIpOGAMQhCEcqCQ3KXZtCsimuaalDmptUIADW7T3eqMeVnKT5P8AgqVjVIuSdQgO424seqZ7icS9Rs1RizHixuf9plrYiMfh3OvgejKlVKq3lW64t+1u9+hcuTYoPVvmpXpsQAbXZiN6Zh0hr5S3F/TaJ51z+GofoN/HK9eetqVXrBMzZjTBVb78pINrnfDA4iFOSUtFz+43TXRNarSc6PxPT4ba2Tvpz8N/HRCFdQoXI9CoSRoiPm14nOoHv4xXa+FNAqrCmSQb5V00Nj6O2SSbNclTVSjTVCHLUxcmw3E3I7T3SR2lgwu1MLTIBGVcwOoLEvfQzqKvmq2i7pJt+yPMzwnV0XOompSaUd1ZcXZ6+F/LmUz5T/gX2f8AePqWDqNh3xIp0/Bo4Rt+bMcu4dXTEkq2w/lOPxNJGWmFLsOjpYMBYAWtvimzj/4av+uX/wDGXuS0t3fMwqEru/BS+QzxGz1XA0sVZczuUK20AGbUa3v0B65DUHvUTQDpLoL/AEh1mWXH/M2H/XN/FVlYwn4xP0l/iEaDvfxYtTTL4I2blJiKlOg1SmbZdWNrkLxI7vqvMprbUV6ikg2Vs2a/SvwOnbYzZ6igggi4NwQeIO8SPrbBwzUvAGigp7wqi1j9IEahu2ZadVQVmjfXoOo7pkXgeV1NkBcEniUsQe3Ui3dK1yt5Tir0V0AvYXuQTpmY7r23CV/a2ynp1qqJSqZFdgpKMbqGIBvbXTjND5MclMPTppUannqMgLeE1y5l1AUiw3kbry1qEPiKE6ta8L+JXObXG1hVaiig0j06hO9dLAg9tgLHt7ZpQjLZmyqOHDCigQMczWvv9O4dm6PRKKklKV0a6NNwhZsx3m2+eq37T/Mm1zFObb56rftP8ybXM6Nktxtj6WdGTiQbfWPfaUfFYx6RC02yVGuM30FHlse4Ay/dvqkHyk2AKyM1Oy1bAX+mAbhG6tba9glVam5K8d0bcBiYU241P2v5eK5c/tciNl8txe1dDbXKy2va+mdeu3EeqeMdUpVy5Wz02JOo0331DDgZT69BqbMjqVZdCp3/APOMdbHxwpBwbkE5l78oBHcbA+uYutlJWkzu9ip05Z6K3310tvdfLZ27iB2hjfkuOp1Pk2SlQZgMqhS+emQWvuJ1LKNNxGmtta2jsmhtKgjk2Ng1Oomtg6hhv8pCCDbT0G8z7abZgabWa5zPfUFzw7lGneWmhchAfkaaAAEqtvooAij0Bbeia8PXu7LRo4/SWAyx6xtNN2t9PLltZWvqVujzYnN0sQMvHLTsx9bWHvl42TsulhqYpUlso1N9Sx4sx4mPoTZOrOe7ONToU6esV9fcUo7opPFLdPcpZqWwQhCQSI1BrPMWqLcRGOiqasZjtrZ71q71Kd2LsTl427OwAe6QLbzbdwmgUKXg6WLqHeiVEXvsb/ZM9nInG1m93f6nscHVz5oraNkvT7WCcesFsWNtZ2P9kbBOMY0xUCFVzXK5r6qCN464+HjCVRRnsw6Rq1aOGnUo/uW1/FX4rhca7U2sKylFZVBt9NidPJNltv6uqTm1tpUn2nRrh2CqFuGSoH0zbky3O+KjmyfeMUv7s/1xT73dYsGOM6Q3NlbMO457zvwVGCyw0WvPifPaksVVlmqK704rhyV7eFhpsjaVJNoYmsXJVw9gEqFhdlIzLluN0j8BiEGzatDwl3NQPcJUKhR4PewWw8gycXm8rAlhjLMd7BCCe85rmUrlLh2wOJ+SeELBlQkqCqnOSLFbm9rRs9Pny58BeqrPTJ/dxXH/ACJrF4mmdm0qGbpLUZixSoEIOfc2WxPSGnfK9QUColmDdJd2b6Q+kBLuebyrbL8rGUblyNYdwzWnmjzcurK3yhdCD+LPA3646qQXEpnRqyt8OyXLh5mgmEITEdMLwhCABAQgJIGO823z1W/af5k2hj/vMX5uPnqt+0/zJtCj1StF0t7HV64bz3TjHhOgSRe4qPOLRTwSPlGfPlvxy5HJHaL2lAmi8vsM9SlTCKWs5Jtrbo2EpH3Hr+ab2TOdXhJ1G0nw4M9P0ZiKUMMlOaTu9HJLjybuMCOqavyQYHCUbdR9Ydr++Zv9x6/mm9kzQuRdJ0woV1KkM9geo6/WTGw0ZRnqmtOTK+lqtKpQWSabUk9GnwfC5PwhOoNZuPOiwnYQiFwQhCABEagtFpwi8lMhq6KNy6d6OFxbjRHFML2O1SmhPfqT6JibbRq2uajA8Bfh19gmy88lUrs4r9OrTX1Zn/0TDVfW5167636/+4uRFka1S2ja8G1srcxydqVvONL9zN49nxlVHYsTRJW/C1RL29Ymd4qlla2u5W132dFce5hLnzTYoLtCmo6OanUUj6RyZr33/k7t0FGN9gnWqNNOT9X9zcyOInRrOxKo6gi7AE7rkC/xlplPV+uYlzsfOqfq6H8bTY8TjMjIlrlmA7l0zH0AzHedf51T9Ch/G0iS0Gg9TZoQhLCkITw1ZRclgLWBuRoTawPVvHrESqY6kt81WmMpAa7qMpO4G50J6pADiESOKTXprpv6Q08rfr/hb2T1TtCsrjMjKyncykEH0iACkBCAkgY7zbfPVb9p/mTaCeAmLc24/wDNVv2n+ZNrAlSLpbnAJ6hCSQRu2H8kd5+wfWZFx5tV71LdQA+37YhhEu6jum2l8MEcmv8AHWaXOwgjX19XbJnZL3Ujq+0SKYWJHVH+x36TDrF/Uf8AeFVXgThXaqvQlYpSETAi4mBs7EUdhCEgcIQhAAhCEAMx5869qGGUGxNVm9mmR/r98xiqw1I0mpc/NW9XCJ1JWb2mpj/QZmmBw/hHVPpMq9flMFAtxJvACwcvNnijiEGUjNh8P3ArQVDrxPQ/5pEOb+tk2lhT/wDZl9tWT/VLNz0UTTxdF1JXNQyaEj8XUbq/WSj7Dr5MVQf6Namx9FRSfdeBC2Pp+M9qUkamc6FgNbL5Q7RHhgTLNiq1yvpXp5QaBL1DZUzast730O4WG+ZdzqkHaqWIPQojTrFRgRNO2TtsNZWU5ybgqvlA8CBx+AmRcvKRXaCKTdstHN2EsWtfjoRCWwtGSb0N3hEsVQFRGRr5WBBsSDY9okP4pYf/AB+3CTkv2q/nb2Y9KNJr9STXhG//AGiK7R5PpW8KKjv4Oqys9MWAJWmqDpWzW6Km194jMckl0Ph6pILlSVpmxqmoapPQ6WY1WOt7aW43X8UsP/j9uLYHk5RpVFqJmzKbi7XG6270xbz/ALV6/wAFjjh0tKkv+C/9BhU5E4c36VTXMDYi5VvDdEm2oBrsRfio6zedwGF8GpGZnJYsWa1yWOug0A7I++UHsnflB7I5nduYjARX5QeyeGck6ySHbgYbyPx/gNr1KhGmeuG7FNU3Pom7O4ALEgAC5PC3XPnvZQ/8hX/Sr/zTNRxu1i+Ho0gfyF8IesgWA91/VEQTqZZNPkhy+2DUxFMi4QOAo679Ese2x98tsoOzUvVpD/Gp94J9w90vVZ7KT1An3SWJRk2m5fmhA4l7ux7TFtlreoOwE+632xrJDYy6sewD1n/abamkGc+j8dVX539xrjVtUYdv16/bPNCsUOYb+2P9oYNmbMovoL68Y2Gzqv0PePjIjOLjqxp0qkajaT34K4nVxjsCCxsd4GkiMXy2qUcXQwppJkqFFFRma56eRrALYHyTqbaydGzKv0feJSOcfZTUmweKsQEqhX10U+EzI3pAt6F65ixCXXQcbWtK/rG3udHBOap1FUve8bX/AMr791kazCEIhqCETq1AoLMQANSTuEY/d3D+dX3/AAgQ5JbskoSN+7uH86vv+EPu7h/Or7/hAjPHmvUx3nsqFtoIo3Lh0HpNSqT7ssrXIygXx2FpkaGvTO76LBifUs0vlVysrs708NgFdNVNaqVJcbugAbqOoknuj7m/x+WlUbFpTo1PCdABR5Hg11uCbm5YcJGt9iVOnlvmV+X4yH598JcYSqOBqof8wRh/AfXMpouVGoI1vmG/Tr6xpun0titq4V1ILo2hsCL627RMs2Vt3HUWu2z6VQEdLyVv1WuxynfwMHe60BTp2bzK/Dv8+BsFCpmVW6wD6xeeyJDbN5Q0alJHf8CxGtJ7EpY2tdbg7uHCOvuzQ86vv+EsKc0eaKWwam9hoyMde47+7SZ1y3xBOONRhqQj2G7yibD6pqnKBqbVM9Jwcw6QHAjjr1j6pR+VnJ9q+WpTt4RRYgkAML3GvAi59cHqjNSahPV6El998fmh/e/2Q+++PzQ/vf7JQzyZxfmT7dP+qc8WcX5k+0n9UjMzX+nzXqX3774/ND+9/sh998fmh/e/2SheLOL8yfaT+qHizi/Mn2k/qhmYfp816l9+++PzQ/vf7IfffH5of3v9koXizi/Mn2k/qh4s4vzJ9pP6oZmH6fNepffvvj80P73+yH33x+aH97/ZKF4s4vzJ9pP6oeLOL8yfap/1QzMP0+a9R1ycqeFxrPa2c1GtvtmbNb0XmjUVG7gPs3iVnknyfbDk1KlvCEWABBCi4O/iTb3SzsOq2vaP+f8AUZGKvJSndExyXwuasXOuQH2m0HuvLFtOoFpm536D16yO2Pi8PRpBfCrmOrb959HDd6JBcqOVuJVzTweHRxpetUa4N94VBbd1k7+Eh5t42v3/AO19S6mo5MsnvvZr+SUFpK7HAyk9v2TLcPtLabVENTIq51LkKLlc4zC3kgZb7hNUTa2GH/yKOwA/CDrVpK0krd1/xExw9CnJShJvxtp9yRppFpG/d3D+dX3/AAh93cP51ff8IruaFKC4okojiKCupR1VlO9WAIOt9xjP7u4fzq+/4RXC7So1DlSoGPVx98ixKnF7MewhCAww21hTVoui7za3bYg290qPi7ifNj2l+MvsJKdimpRjN3ZQvF3E+bHtL8YeLuJ82PaX4y+wk5mJ2WHeULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYc2ULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYc2ULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYd5QvF3E+bHtL8YeLuJ82PaX4y+whmYdlhzZQvF3E+bHtL8YeLuJ82PaX4y+whmYdlh3lC8XcT5se0vxh4u4nzY9pfjL7CGZh2WHeULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYd5QvF3E+bHtL8YeLuJ82PaX4y+whmYdlh3lC8XcT5se0vxh4u4nzY9pfjL7CGZh2WHNlC8XcT5se0vxh4u4nzY9pfjL7CGZh2WHeULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYc2ULxdxPmx7S/GHi7ifNj2l+MvsIZmHZYd5QvF3E+bHtL8Y/2HsOslZXcBQtzvBvoRbQ9st0IZiY4aCd9QhCEU0H/2Q=="
                alt="Step 2"
                className="mx-auto mb-4 h-40"
              />
              <h3 className="text-lg font-semibold text-gray-950">Agencies</h3>
              <p className="text-gray-700 mt-2">
                If you're an agency with proven expertise in voiceover,
                translation, or production, we’re excited to see how we can
                expand our network together. <br />
                <span className="text-gray-600 font-thin">
                  (Note: We only partner with agencies that share our commitment
                  to quality, cultural sensitivity, and efficiency.)
                </span>
              </p>
              <div className="p-4 mt-10 flex flex-col md:flex-row justify-center gap-6 lg:gap-60">
                <a
                  href="https://forms.gle/Hwrwi9qevzQbLh6C8"
                  className="bg-purple-500 hover:bg-purple-600 transition duration-500 transform hover:-translate-y-4  text-white py-2 px-4 rounded-lg"
                >
                  {" "}
                  Collaborate as an Agency
                </a>
              </div>
            </div>
          </div>

          {/* Steps for Collaboration */}
          <div className="p-4 mt-4 ">
            <h3 className="text-center text-2xl font-bold mb-4">
              This Is How We Will Move Forward Together
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-12 mb-20 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition duration-500 transform hover:-translate-y-6">
                <img
                  src="https://cdn.goodmanlantern.com/wp-content/uploads/2024/01/Group-7672.svg"
                  alt="Step 2"
                  className="mx-auto mb-4 h-36"
                />
                <h4 className="font-bold text-gray-800 ">
                  Step 1: Fill Out A Google Form
                </h4>
                <p className="mt-2 text-gray-600">
                  Fill a quick Google form with your personal and professional
                  information. This helps us understand your background and how
                  you can contribute to our team.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition duration-500 transform hover:-translate-y-6">
                <img
                  src="https://cdn.goodmanlantern.com/wp-content/uploads/2024/01/Group-7721.svg"
                  alt="Step 2"
                  className="mx-auto mb-4 h-36"
                />
                <h4 className="font-bold text-gray-800">
                  Step 2: Submit Your Samples
                </h4>
                <p className="mt-2 text-gray-600">
                  Share your best samples that showcase your expertise. This
                  allows us to evaluate your skills and ensure a good fit for
                  our projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition duration-500 transform hover:-translate-y-6">
                <img
                  src="https://srihm.edu.in/wp-content/uploads/2022/09/Should-Hospitality-Sector-concentrate-on-Increasing-Digital-Footprint.jpg"
                  alt="Step 2"
                  className="mx-auto mb-4 h-36"
                />
                <h4 className="font-bold text-gray-800">
                  Step 3: Sign the NDA
                </h4>
                <p className="mt-2 text-gray-600">
                  Sign our Non-Disclosure Agreement (NDA) to protect client
                  confidentiality and maintain the integrity of each project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition duration-500 transform hover:-translate-y-6">
                <img
                  src="https://cdn.goodmanlantern.com/wp-content/uploads/2024/01/Group-7153.svg"
                  alt="Step 2"
                  className="mx-auto mb-4 h-36"
                />
                <h4 className="font-bold text-gray-800">
                  Step 4: Start Getting Work
                </h4>
                <p className="mt-2 text-gray-600">
                  Once everything is set, you’ll be ready to start receiving
                  projects and work with us. We’re excited to have you on board!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Localization Section */}
        <div className="bg-gray-100 py-6 px-6">
          <h2 className="text-center text-4xl font-bold text-blue-700 mb-10">
            Here’s What We Look For In All Our Partners
          </h2>
          <div className="max-w-4xl  mx-auto">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700 ">
                  Proven work in relevant languages, industries, or genres.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  Voice or Style Samples that showcase your unique abilities.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  Quality proofs, like ISO or ATA certifications.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  References or Client Feedback that speak to your reputation.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  Adherence to format, bit-rate, and platform specs.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  A deep understanding of regional nuances for effective
                  localization.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  Quick, and reliable project completion.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">✔</span>
                <p className="text-gray-700">
                  Pricing that aligns with project scope.
                </p>
              </li>
            </ul>
          </div>
       
        </div>
    
       
      </div>
     
    </div>
  );
};

export default Work;
